package com.corusconsulting.template.dao.impl;

import com.corusconsulting.template.dao.UserDAO;
import com.corusconsulting.template.dto.ReturnedObject;
import com.corusconsulting.template.repo.User;
import com.corusconsulting.template.repo.crud.UserRepo;
import com.corusconsulting.template.utils.ReturnManipulationUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;
import java.util.List;

@Repository
public class UserDAOImpl implements UserDAO {

    @Autowired
    private EntityManager em;
    @Autowired
    private UserRepo userRepo;
    @Autowired
    private ReturnedObject ro;
    @Autowired
    private ReturnManipulationUtil rmu;

    @Override
    public ReturnedObject loginUser(User user) throws Exception {
        ro.setStatusMsg("SUCCESS");
        ro.setStatus("SUCCESS");
        ro.setReturnedObjectCount(1);

        TypedQuery<User> query = em.createQuery(
                "SELECT u FROM User AS u WHERE u.userName = :userName" +
                        " AND u.password = :password", User.class);
        query.setParameter("userName",user.getUserName());
        query.setParameter("password",user.getPassword());
        List<User> users = query.getResultList();
        if(users.size()==0){
            ro.setStatus("ERROR");
            ro.setStatusMsg("Incorrect username or password!");
            ro.setReturnedObjectCount(0);
        }else{
            user = users.get(0);
        }
        rmu.decryptString(user.getPassword());
        ro.setReturnedObject(rmu.convertReturnValueToJSON(user,false));

        return ro;
    }
}
