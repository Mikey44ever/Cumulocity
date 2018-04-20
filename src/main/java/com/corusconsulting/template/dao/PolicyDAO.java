package com.corusconsulting.template.dao;

import com.corusconsulting.template.repo.Policy;

import java.util.List;

public interface PolicyDAO {

    String saveInsured(Policy policy)throws Exception;
    String findInsured(Policy policy)throws Exception;
    List<Policy> findInsuredForRequest(String param, String value)throws Exception;
}
