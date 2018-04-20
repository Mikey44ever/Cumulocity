package com.corusconsulting.template.dao;

import com.corusconsulting.template.repo.Request;

import java.util.List;

public interface RequestDAO {

    String saveRequest(Request r)throws Exception;
    String getRequests()throws Exception;
    List<Request> validateExistingRequest(Request r)throws Exception;
}
