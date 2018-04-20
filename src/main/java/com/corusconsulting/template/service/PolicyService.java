package com.corusconsulting.template.service;

import com.corusconsulting.template.repo.Policy;

public interface PolicyService {

    String saveInsured(Policy policy)throws Exception;
    String findInsured(Policy policy)throws Exception;
}
