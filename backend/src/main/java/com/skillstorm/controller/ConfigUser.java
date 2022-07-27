package com.skillstorm.controller;

import com.skillstorm.model.UserModel;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
@RequestMapping("/tele")
public class ConfigUser {

    @GetMapping(produces = "application/json")
    @RequestMapping({ "/login" })
    public UserModel validateLogin() {
        return new UserModel("User successfully authenticated");
    }
}
