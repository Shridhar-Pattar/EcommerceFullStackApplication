package com.myspringboot.EcommerceBackend.repo;

import com.myspringboot.EcommerceBackend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByUsername(String username);
    Optional<User> findByEmail(String email);  // Added method to find by email
}
