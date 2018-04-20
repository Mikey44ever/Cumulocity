package com.corusconsulting.template.dao.impl;

import com.corusconsulting.template.dao.MissionHistoryDAO;
import com.corusconsulting.template.dao.PolicyDAO;
import com.corusconsulting.template.dao.RequestDAO;
import com.corusconsulting.template.dao.TowTrucksDAO;
import com.corusconsulting.template.dto.ReturnedObject;
import com.corusconsulting.template.repo.MissionHistory;
import com.corusconsulting.template.repo.Policy;
import com.corusconsulting.template.repo.Request;
import com.corusconsulting.template.repo.TowTrucks;
import com.corusconsulting.template.repo.crud.RequestTblRepo;
import com.corusconsulting.template.utils.ReturnManipulationUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;
import java.util.Date;
import java.util.List;

@Repository
public class RequestDAOImpl implements RequestDAO {

    @Autowired
    private PolicyDAO policyDAO;
    @Autowired
    private MissionHistoryDAO missionHistoryDAO;
    @Autowired
    private TowTrucksDAO towTrucksDAO;
    @Autowired
    private RequestTblRepo rtRepo;
    @Autowired
    private ReturnedObject ro;
    @Autowired
    private ReturnManipulationUtil rmu;
    private String returnValue;
    @Autowired
    private EntityManager em;

    @Override
    public List<Request> validateExistingRequest(Request r) throws Exception {
        TypedQuery<Request> query = em.createQuery(
                "SELECT r FROM Request AS r WHERE r.status NOT IN('COMPLETED','CANCELLED') AND " +
                        "r.plateNumber = :plateNumber", Request.class);
        query.setParameter("plateNumber",r.getPlateNumber());
        return query.getResultList();
    }

    @Override
    public String saveRequest(Request r) throws Exception {
        TowTrucks t = null;
        ro.setStatus("SUCCESS");
        ro.setStatusMsg("SUCCESS");

        Request oldDetails = null;
        try{
            oldDetails=validateExistingRequest(r).get(0);
        }catch (Exception e){
            //do nothing
        }

        if("ASSIGNED".equalsIgnoreCase(r.getStatus()) || "COMPLETED".equalsIgnoreCase(r.getStatus())){
            t = updateTowTrucks(r);
            if(t.getTruckId()==null){
                ro.setStatus("ERROR");
                ro.setStatusMsg("Error assigning tow truck.");
            }
        }else if("CANCELLED".equalsIgnoreCase(r.getStatus()))
            insertToMissionHistory(r, null, null);

        if("SUCCESS".equalsIgnoreCase(ro.getStatus()))
            r = rtRepo.save(r);
        else
            r = oldDetails != null ? oldDetails : r;

        returnValue = rmu.convertReturnValueToJSON(r,false);
        ro.setReturnedObject(returnValue);
        ro.setReturnedObjectCount(1);
        returnValue = rmu.convertReturnValueToJSON(ro,false);
        return returnValue;
    }

    private TowTrucks updateTowTrucks(Request r){
        TowTrucks t = null;
        try{
            String dispatchStatus = "";
            if("ASSIGNED".equalsIgnoreCase(r.getStatus()))
                dispatchStatus = "ENROUTE";
            else
                dispatchStatus = "ACTIVE";

            List<TowTrucks> tTs = towTrucksDAO.getTowTruck("truckId",new Integer(r.getAssignedTowTruck()));
            t = tTs.get(0);
            if( "ASSIGNED".equalsIgnoreCase(r.getStatus()) &&
                    t.getDispatchId() != null && !t.getDispatchId().equalsIgnoreCase(r.getRequestId().toString())){
                ro.setStatus("ERROR");
                ro.setStatusMsg("Tow truck already assigned.");
                return t;
            }

            t.setETA(r.getEta());
            t.setDispatchAssignmentInsured(r.getPolicyNumber());
            t.setDispatchAssignmentRoute(r.getTowTruckTargetDestination());
            t.setDispatchId(r.getRequestId().toString());
            t.setDispatchStatus(dispatchStatus);
            t.setDispatchTime(new Date().toString());
            t.setTruckStatus(dispatchStatus);
            towTrucksDAO.updateTowTrucksForDispatch(t);

            if("COMPLETED".equalsIgnoreCase(r.getStatus())){
                List<Policy>policies = policyDAO.findInsuredForRequest("plateNumber",r.getPlateNumber());
                insertToMissionHistory(r, policies.get(0), t);

                t.setETA(null);
                t.setDispatchAssignmentInsured(null);
                t.setDispatchAssignmentRoute(null);
                t.setDispatchId(null);
                t.setDispatchStatus(null);
                t.setDispatchTime(null);
                t.setTruckStatus("ACTIVE");
                towTrucksDAO.updateTowTrucksForDispatch(t);
            }
        }catch (Exception e){
            e.printStackTrace();
            t = new TowTrucks();
        }
        return t;
    }

    private void insertToMissionHistory(Request r, Policy p,TowTrucks t)throws Exception{
        MissionHistory mh = new MissionHistory();
        mh.setMissionId(r.getRequestId());
        mh.setMissionStatus(r.getStatus());
        mh.setClientName(r.getContactName());
        mh.setMissionDate(r.getTimeRequested());
        mh.setDistanceTravelled(r.getDistanceToTravel());
        mh.setInsuredName(p != null ? p.getName() : null);//policies.get(0)
        mh.setMissionComment(r.getStatus());
        mh.setPolicyNumber(r.getPolicyNumber());
        mh.setTowTruckPlateNo(t != null ? t.getPlateNumber() : null);
        missionHistoryDAO.saveMissionHistory(mh);
    }

    @Override
    public String getRequests() throws Exception {
        TypedQuery<Request> query = em.createQuery(
                "SELECT r FROM Request AS r WHERE r.status NOT IN('COMPLETED','CANCELLED')", Request.class);

        returnValue = rmu.convertReturnValueToJSON(query.getResultList(),true);
        ro.setReturnedObject(returnValue);
        ro.setReturnedObjectCount(1);
        ro.setStatus("SUCCESS");
        ro.setStatusMsg("SUCCESS");
        returnValue = rmu.convertReturnValueToJSON(ro,false);
        return returnValue;
    }
}
