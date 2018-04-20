package com.corusconsulting.template.dao.impl;

import com.corusconsulting.template.dao.TowTrucksDAO;
import com.corusconsulting.template.dto.ReturnedObject;
import com.corusconsulting.template.repo.Device;
import com.corusconsulting.template.repo.Policy;
import com.corusconsulting.template.repo.TowTrucks;
import com.corusconsulting.template.repo.TrucksDevice;
import com.corusconsulting.template.repo.crud.TowTrucksRepo;
import com.corusconsulting.template.utils.ReturnManipulationUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;
import javax.persistence.criteria.*;
import java.util.ArrayList;
import java.util.List;


@Repository
public class TowTrucksDAOImpl implements TowTrucksDAO {

    @Autowired
    private EntityManager em;
    @Autowired
    private TowTrucksRepo ttr;
    @Autowired
    private ReturnedObject ro;
    @Autowired
    private ReturnManipulationUtil rmu;
    private String returnValue;

    @Override
    public List<TowTrucks> getTowTruck(String param,Object value) throws Exception {
        TypedQuery<TowTrucks> query = em.createQuery(
                "SELECT tt FROM TowTrucks AS tt WHERE tt."+param+" = :"+param, TowTrucks.class);
        query.setParameter(param,value);
        return query.getResultList();
    }

    @Override
    public TowTrucks updateTowTrucksForDispatch(TowTrucks t) throws Exception {
        return ttr.save(t);
    }

    @Override
    public String getAllTowTrucks() throws Exception {
        CriteriaBuilder cb = em.getCriteriaBuilder();
        CriteriaQuery<TrucksDevice> q = cb.createQuery(TrucksDevice.class);
        Root<TowTrucks> trucks = q.from(TowTrucks.class);
        Join<Device,TowTrucks> devices = trucks.join("device", JoinType.INNER);
        q.multiselect(trucks, devices);

        List<TowTrucks> towTrucksFinal = new ArrayList<>();
        Iterable tts = em.createQuery(q).getResultList();
        tts.forEach(truck -> addTowTruck((TrucksDevice) truck, towTrucksFinal));
        returnValue = rmu.convertReturnValueToJSON(towTrucksFinal,true);

        ro.setReturnedObject(returnValue);
        ro.setReturnedObjectCount(1);
        ro.setStatus("SUCCESS");
        ro.setStatusMsg("SUCCESS");
        returnValue = rmu.convertReturnValueToJSON(ro,false);

        return returnValue;
    }

    private void addTowTruck(TrucksDevice trucksDevice, List list){
        list.add(trucksDevice.getTowTrucks());
    }
}
