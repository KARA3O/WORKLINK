package com.worklink.backend.models;

public class Requester extends User {

    private String company;
    private double avgRating;


    public Requester(String userId,
                     String name,
                     String email,
                     String passwordHash,
                     String phone,
                     String company) {

        super(userId, name, email, passwordHash, phone, Role.REQUESTER);

        this.company = company;
        this.avgRating = 0.0;
    }


    public void postJob(String details) {
        System.out.println("Job posted: " + details);
    }


    public void acceptWorker(String applicationId) {
        System.out.println("Worker accepted: " + applicationId);
    }


    public void markJobComplete(String jobId) {
        System.out.println("Job completed: " + jobId);
    }


    public void payWorker(String jobId) {
        System.out.println("Payment processed for: " + jobId);
    }
}