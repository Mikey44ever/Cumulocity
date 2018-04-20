package com.corusconsulting.template.service.impl;

import com.corusconsulting.template.dao.PolicyDAO;
import com.corusconsulting.template.dao.RequestDAO;
import com.corusconsulting.template.dto.ReturnedObject;
import com.corusconsulting.template.repo.Policy;
import com.corusconsulting.template.repo.Request;
import com.corusconsulting.template.service.RequestService;
import com.corusconsulting.template.utils.ReturnManipulationUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class RequestServiceImpl implements RequestService {

    @Autowired
    private RequestDAO requestDAO;
    @Autowired
    private PolicyDAO policyDAO;
    @Autowired
    private ReturnedObject ro;
    private String returnValue;
    @Autowired
    private ReturnManipulationUtil rmu;

    @Override
    public String saveUpdateRequest(Request r) throws Exception {
        List<Policy> policies = new ArrayList<>();

        if(r.getRequestId()==null)
            policies = policyDAO.findInsuredForRequest("plateNumber",r.getPlateNumber());

        List<Request> existingRequests = requestDAO.validateExistingRequest(r);
        if(existingRequests.size()>0 && r.getRequestId()==null){
            returnValue = rmu.convertReturnValueToJSON(r,false);
            ro.setReturnedObject(returnValue);
            ro.setReturnedObjectCount(existingRequests.size());
            ro.setStatus("ERROR");
            ro.setStatusMsg("There is an active request for this plate number: "+r.getPlateNumber().toUpperCase()+"\n" +
                    " ; date requested : " + existingRequests.get(0).getTimeRequested());
            returnValue = rmu.convertReturnValueToJSON(ro,false);
            return returnValue;
        }else if(policies.size()>0){
            r.setPolicyNumber(policies.get(0).getPolicyNumber());
            return requestDAO.saveRequest(r);
        } else if(r.getRequestId()!=null){
            return requestDAO.saveRequest(r);
        } else {
            returnValue = rmu.convertReturnValueToJSON(r,false);
            ro.setReturnedObject(returnValue);
            ro.setReturnedObjectCount(1);
            ro.setStatus("ERROR");
            ro.setStatusMsg("The given plate number is not insured.");
            returnValue = rmu.convertReturnValueToJSON(ro,false);
            return returnValue;
        }

    }

    @Override
    public String getRequests() throws Exception {

        return requestDAO.getRequests();
    }
}
