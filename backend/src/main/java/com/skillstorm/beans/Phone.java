package com.skillstorm.beans;

import javax.persistence.*;

@Entity
@Table(name = "phone")
public class Phone {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column(name = "phonenumber")
    private long phoneNumber;
    @Column(name = "userid")
    private int userId;
    @Column(name = "planid")
    private int planId;

    public Phone() {
    }

    public Phone(int id, long phoneNumber, int userId, int planId) {
        this.id = id;
        this.phoneNumber = phoneNumber;
        this.userId = userId;
        this.planId = planId;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public long getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(long phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public int getPlanId() {
        return planId;
    }

    public void setPlanId(int planId) {
        this.planId = planId;
    }
}
