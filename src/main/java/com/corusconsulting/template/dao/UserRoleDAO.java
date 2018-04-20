package com.corusconsulting.template.dao;

import com.corusconsulting.template.repo.UserRole;

public interface UserRoleDAO {

    UserRole loadPermissions(UserRole userRole)throws Exception;
}
