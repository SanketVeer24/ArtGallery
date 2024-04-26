package com.dbproject.artgallery.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;

@Entity
@Table(name = "ticket")
public class Ticket {
    @Id
    @Column(name = "ticket_no")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer ticketNo;
    @Column(name = "amount")
    private double amount;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "event_id")
    @JsonBackReference
    private Event event;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "customer_id")
    @JsonBackReference
    private Customer customer;

    public Ticket(Integer ticketNo, double amount, Event event, Customer customer) {
        this.ticketNo = ticketNo;
        this.amount = amount;
        this.event = event;
        this.customer = customer;
    }

    public Ticket(Integer ticketNo, double amount) {
        this.ticketNo = ticketNo;
        this.amount = amount;
    }

    public Ticket() {
    }

    public Integer getTicketNo() {
        return ticketNo;
    }

    public void setTicketNo(Integer ticketNo) {
        this.ticketNo = ticketNo;
    }

    public double getAmount() {
        return amount;
    }

    public void setAmount(double amount) {
        this.amount = amount;
    }

    public Event getEvent() {
        return event;
    }

    public void setEvent(Event event) {
        this.event = event;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }
}
