package com.corusconsulting.template.dao;

import com.corusconsulting.template.dto.ReturnedObject;
import com.corusconsulting.template.repo.User;

public interface UserDAO {

    ReturnedObject loginUser(User user)throws Exception;
}
