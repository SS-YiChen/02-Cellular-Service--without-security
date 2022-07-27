package com.skillstorm.controller;

import com.skillstorm.beans.Phone;
import com.skillstorm.data.PhoneRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/tele")
public class PhoneController {
    @Autowired
    private PhoneRepository phoneRepository;

    //get all phone
    @GetMapping("/phone")
    public List<Phone> getAllPhone(){
        return phoneRepository.findAll();
    }


}
