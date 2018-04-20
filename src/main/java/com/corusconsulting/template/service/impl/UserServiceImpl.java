package com.corusconsulting.template.service.impl;

import com.corusconsulting.template.dao.UserDAO;
import com.corusconsulting.template.dto.ReturnedObject;
import com.corusconsulting.template.repo.User;
import com.corusconsulting.template.repo.crud.UserRepo;
import com.corusconsulting.template.service.UserService;
import com.corusconsulting.template.utils.ReturnManipulationUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import static java.util.Collections.emptyList;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserDAO userDAO;
    @Autowired
    private ReturnManipulationUtil rmu;
    @Autowired
    private UserRepo userRepo;

    public UserServiceImpl(UserRepo userRepo){
        this.userRepo = userRepo;
    }

    @Override
    public ReturnedObject loginUser(User user) throws Exception {
        user.setPassword(rmu.encryptString(user.getPassword()));
        return userDAO.loginUser(user);
    }
}
