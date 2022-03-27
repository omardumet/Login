package com.example.demo.dao;

import com.example.demo.model.User;
import org.springframework.data.annotation.Persistent;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;
import java.util.List;

@Repository
@Transactional
public class userDaoImplement implements userDao{

    @PersistenceContext
    EntityManager entityManager;

    @Override
    public void postUser(User user) {
        entityManager.merge(user);

    }

    @Override
    public List<User> getAllUsers() {
        String query = "FROM User";
        return entityManager.createQuery(query).getResultList();
    }

    @Override
    public boolean verifyUser(User user) {
        String query = "FROM User WHERE email = :email AND password = :password";
        List list = entityManager.createQuery(query)
                .setParameter("email", user.getEmail())
                .setParameter("password", user.getPassword())
                .getResultList();

        if (list.isEmpty()) {
            return false;
        }
        return true;
    }

    @Override
    public String getPassword(User user) {
        String query = "FROM User WHERE email = :email";

        List<User> list = entityManager.createQuery(query)
                .setParameter("email", user.getEmail())
                .getResultList();

        String userpass = list.get(0).getPassword();

        if (list.isEmpty() || userpass == null) {
            return "user not found";
        }

        return userpass;
    }




}

