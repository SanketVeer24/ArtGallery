package com.dbproject.artgallery.model;

public class TicketBookingRequest {

    private Integer eventId;
    private String customerName;
    private String email;
    private String phone;
    private double amount;

    public TicketBookingRequest(Integer eventId, String customerName, String email, String phone, double amount) {
        this.eventId = eventId;
        this.customerName = customerName;
        this.email = email;
        this.phone = phone;
        this.amount = amount;
    }

    public Integer getEventId() {
        return eventId;
    }

    public void setEventId(Integer eventId) {
        this.eventId = eventId;
    }

    public String getCustomerName() {
        return customerName;
    }

    public void setCustomerName(String customerName) {
        this.customerName = customerName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public double getAmount() {
        return amount;
    }

    public void setAmount(double amount) {
        this.amount = amount;
    }
}
