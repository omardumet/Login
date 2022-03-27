package com.example.demo.dao;

import com.example.demo.model.User;

import java.util.List;

public interface userDao {

    public void postUser(User user);

    public List<User> getAllUsers();

    public boolean verifyUser(User user);

    public String getPassword(User user);
}
