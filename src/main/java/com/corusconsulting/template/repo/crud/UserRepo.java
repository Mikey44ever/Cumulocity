package com.corusconsulting.template.repo.crud;

import com.corusconsulting.template.repo.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepo extends CrudRepository<User, Long> {
}
