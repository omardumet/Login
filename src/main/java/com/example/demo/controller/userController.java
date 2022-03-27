package com.example.demo.controller;

import com.example.demo.dao.userDao;
import com.example.demo.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
public class userController {


    @Autowired
    userDao userDao;


    @PostMapping(path = "/post2")
    public void postUser2(@RequestBody User user){
        userDao.postUser(user);
    }

    @PostMapping(path = "/post3")
    public boolean postUser3(@RequestBody User user){
        return userDao.verifyUser(user);
    }

    @PostMapping(path = "/post4")
    public String postUser4(@RequestBody User user){
        System.out.println("testing/ user email:" + user.getEmail());

        return userDao.getPassword(user);
    }
}
