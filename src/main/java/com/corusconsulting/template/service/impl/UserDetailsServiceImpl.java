package com.corusconsulting.template.service.impl;

import com.corusconsulting.template.repo.User;
import com.corusconsulting.template.repo.crud.UserRepo;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Collections;

@Service
public class UserDetailsServiceImpl {// implements UserDetailsService {

    private UserRepo applicationUserRepository;

    public UserDetailsServiceImpl(UserRepo applicationUserRepository) {
        this.applicationUserRepository = applicationUserRepository;
    }

}
