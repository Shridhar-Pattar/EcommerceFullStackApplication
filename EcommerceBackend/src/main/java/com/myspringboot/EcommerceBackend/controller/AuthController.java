package com.myspringboot.EcommerceBackend.controller;

import com.myspringboot.EcommerceBackend.request.AuthenticationRequest;
import com.myspringboot.EcommerceBackend.request.SignupRequest;
import com.myspringboot.EcommerceBackend.response.AuthenticationResponse;
import com.myspringboot.EcommerceBackend.service.UserService;
import com.myspringboot.EcommerceBackend.utility.JwtUtil;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController
@RequestMapping
public class AuthController {

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private UserService userService;

    @PostMapping("/login")
    public AuthenticationResponse createToken(@RequestBody AuthenticationRequest request) {
        log.info("createToken(-)");
        // Authenticate the user
        UserDetails userDetails = userService.loadUserByUsername(request.getUsername());

        // Generate the token
        String jwtToken = jwtUtil.generateToken(request.getUsername());

        return new AuthenticationResponse(jwtToken);
    }

    @PostMapping("/signup")
    public void signup(@RequestBody SignupRequest request) {
        log.info("signup(-)");
        userService.registerUser(request.getUsername(), request.getPassword(), request.getEmail());
    }
}
