package com.worklink.backend.models;

import java.time.LocalDateTime;

public abstract class User {


    protected String userId;
    protected String name;
    protected String email;
    protected String passwordHash;
    protected String phone;
    protected Role role;
    protected Status status;
    protected LocalDateTime createdAt;


    public User(String userId, String name, String email,
                String passwordHash, String phone, Role role) {

        this.userId = userId;
        this.name = name;
        this.email = email;
        this.passwordHash = passwordHash;
        this.phone = phone;
        this.role = role;
        this.status = Status.ACTIVE;
        this.createdAt = LocalDateTime.now();
    }



    public void register() {
        System.out.println(name + " registered successfully.");
    }


    public boolean login(String email, String password) {

        return this.email.equals(email)
                && this.passwordHash.equals(password);
    }


    public void logout() {

        System.out.println(name + " logged out.");
    }


    public void editProfile(String newName, String newPhone) {

        this.name = newName;
        this.phone = newPhone;
    }



    public String getUserId() {
        return userId;
    }


    public String getName() {
        return name;
    }


    public String getEmail() {
        return email;
    }


    public String getPhone() {
        return phone;
    }


    public Role getRole() {
        return role;
    }


    public Status getStatus() {
        return status;
    }


    // Setters

    public void setStatus(Status status) {
        this.status = status;
    }
}