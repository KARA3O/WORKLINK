package com.worklink.backend.models;

import java.util.List;

public class Worker extends User {

    private List<String> skills;
    private String cvUrl;
    private double avgRating;
    private double earnings;
    private boolean verified;


    public Worker(String userId,
                  String name,
                  String email,
                  String passwordHash,
                  String phone) {

        super(userId, name, email, passwordHash, phone, Role.WORKER);

        this.avgRating = 0.0;
        this.earnings = 0.0;
        this.verified = false;
    }


    public void applyForJob(String jobId) {
        System.out.println(name + " applied for job: " + jobId);
    }


    public void acceptOffer(String jobId) {
        System.out.println("Accepted job: " + jobId);
    }


    public void rejectOffer(String jobId) {
        System.out.println("Rejected job: " + jobId);
    }


    public void setAvailability(Status status) {
        this.status = status;
    }


    public void rateRequester(String jobId, int score) {
        System.out.println("Rated requester " + score);
    }
}