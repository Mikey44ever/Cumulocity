package com.corusconsulting.template.service.impl;

import com.corusconsulting.template.dao.UserRoleDAO;
import com.corusconsulting.template.repo.UserRole;
import com.corusconsulting.template.service.UserRoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserRoleServiceImpl implements UserRoleService{

    @Autowired
    private UserRoleDAO userRoleDAO;

    @Override
    public UserRole loadPermissions(UserRole userRole) throws Exception {
        return userRoleDAO.loadPermissions(userRole);
    }
}
