package com.corusconsulting.template.dao.impl;

import com.corusconsulting.template.dao.PolicyDAO;
import com.corusconsulting.template.dto.ReturnedObject;
import com.corusconsulting.template.repo.Policy;
import com.corusconsulting.template.repo.crud.PolicyRepo;
import com.corusconsulting.template.utils.ReturnManipulationUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;
import java.util.List;

@Repository
public class PolicyDAOImpl implements PolicyDAO {

    @Autowired
    private EntityManager em;

    @Autowired
    private PolicyRepo policyRepo;

    @Autowired
    private ReturnedObject ro;
    private String returnValue;

    @Autowired
    private ReturnManipulationUtil rmu;

    @Override
    public String saveInsured(Policy policy) throws Exception {
        policyRepo.save(policy);
        return null;
    }

    @Override
    public String findInsured(Policy policy) throws Exception {
        TypedQuery<Policy> query = em.createQuery(
                "SELECT p FROM Policy AS p WHERE p.policyNumber = :policyNumber", Policy.class);
        query.setParameter("policyNumber",policy.getPolicyNumber());

        try{
            returnValue = rmu.convertReturnValueToJSON(query.getSingleResult(),false);
        }catch (javax.persistence.NoResultException e){
            returnValue = rmu.convertReturnValueToJSON(new Policy(),false);
        }

        ro.setReturnedObject(returnValue);
        ro.setReturnedObjectCount(1);
        ro.setStatus("SUCCESS");
        ro.setStatusMsg("SUCCESS");
        String finalReturn = rmu.convertReturnValueToJSON(ro,false);
        return finalReturn;
    }

    @Override
    public List<Policy> findInsuredForRequest(String param, String value) throws Exception {
        TypedQuery<Policy> query = em.createQuery(
                "SELECT p FROM Policy AS p WHERE p."+param+" = :"+param, Policy.class);
        query.setParameter(param,value);
        return query.getResultList();
    }
}
