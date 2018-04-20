package com.corusconsulting.template.service.impl;

import com.corusconsulting.template.dao.PolicyDAO;
import com.corusconsulting.template.repo.Policy;
import com.corusconsulting.template.service.PolicyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PolicyServiceImpl implements PolicyService {

    @Autowired
    private PolicyDAO policyDAO;

    @Override
    public String saveInsured(Policy policy) throws Exception {
        return policyDAO.saveInsured(policy);
    }

    @Override
    public String findInsured(Policy policy) throws Exception {
        return policyDAO.findInsured(policy);
    }
}
