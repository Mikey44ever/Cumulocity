package com.corusconsulting.template.dao.impl;


import com.corusconsulting.template.dao.UserRoleDAO;
import com.corusconsulting.template.repo.UserRole;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;

@Repository
public class UserRoleDAOImpl implements UserRoleDAO{

    @Autowired
    private EntityManager em;

    @Override
    public UserRole loadPermissions(UserRole userRole) throws Exception {
        TypedQuery<UserRole> query = em.createQuery(
                "SELECT ur FROM UserRole AS ur WHERE ur.roleId = :roleId", UserRole.class);
        query.setParameter("roleId",userRole.getRoleId());
        return query.getSingleResult();
    }
}
