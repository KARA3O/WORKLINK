package com.worklink.backend.models;

public class Administrator extends User {


    public Administrator(String userId,
                         String name,
                         String email,
                         String passwordHash,
                         String phone) {

        super(userId, name, email, passwordHash, phone, Role.ADMINISTRATOR);
    }


    public void manageUsers() {
        System.out.println("Managing users");
    }


    public void verifyWorker(String workerId) {
        System.out.println("Verified worker: " + workerId);
    }


    public void viewReports() {
        System.out.println("Viewing reports");
    }
}