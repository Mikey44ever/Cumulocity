package com.corusconsulting.template.service;

import com.corusconsulting.template.repo.UserRole;

public interface UserRoleService {
    UserRole loadPermissions(UserRole userRole)throws Exception;
}
