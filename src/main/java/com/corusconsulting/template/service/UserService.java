package com.corusconsulting.template.service;

import com.corusconsulting.template.dto.ReturnedObject;
import com.corusconsulting.template.repo.User;
import org.springframework.stereotype.Repository;

@Repository
public interface UserService {
    ReturnedObject loginUser(User user)throws Exception;
}
