package com.corusconsulting.template.service;

import com.corusconsulting.template.repo.Request;

public interface RequestService {

    String saveUpdateRequest(Request r)throws Exception;
    String getRequests()throws Exception;
}
