package com.dbproject.artgallery.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "ag_event")
public class Event {
    @Id
    @Column(name = "event_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer eventId;

    @Column(name = "event_name")
    private String eventName;

    @Column(name = "event_type")
    private String eventType;

    @Column(name = "doe")
    @Temporal(TemporalType.DATE)
    private Date doe;

    @Column(name = "start_time")
    @Temporal(TemporalType.TIME)
    private Time startTime;

    @Column(name = "end_time")
    @Temporal(TemporalType.TIME)
    private Time endTime;

    @Column(name = "event_desc")
    private String eventDesc;

    @OneToMany(mappedBy = "event", cascade = CascadeType.ALL)
    @JsonManagedReference
    private List<Ticket> tickets;

    @OneToMany(mappedBy = "event", cascade = CascadeType.ALL)
    @JsonManagedReference
    private List<EventArtwork> eventArtworks = new ArrayList<>();

    public Event(List<EventArtwork> eventArtworks) {
        this.eventArtworks = eventArtworks;
    }

    public Event() {
        this.tickets=new ArrayList<>();
    }

    public Event(Integer eventId, String eventName, String eventType, Date doe, Time startTime, Time endTime, String eventDesc, List<Ticket> tickets) {
        this.eventId = eventId;
        this.eventName = eventName;
        this.eventType = eventType;
        this.doe = doe;
        this.startTime = startTime;
        this.endTime = endTime;
        this.eventDesc = eventDesc;
        this.tickets = tickets;
    }

    public Event(Integer eventId, String eventName, String eventType, Date doe, Time startTime, Time endTime, String eventDesc, List<Ticket> tickets, List<EventArtwork> eventArtworks) {
        this.eventId = eventId;
        this.eventName = eventName;
        this.eventType = eventType;
        this.doe = doe;
        this.startTime = startTime;
        this.endTime = endTime;
        this.eventDesc = eventDesc;
        this.tickets = tickets;
        this.eventArtworks = eventArtworks;
    }

    public Integer getEventId() {
        return eventId;
    }

    public void setEventId(Integer eventId) {
        this.eventId = eventId;
    }

    public String getEventName() {
        return eventName;
    }

    public void setEventName(String eventName) {
        this.eventName = eventName;
    }

    public String getEventType() {
        return eventType;
    }

    public void setEventType(String eventType) {
        this.eventType = eventType;
    }

    public Time getStartTime() {
        return startTime;
    }

    public void setStartTime(Time startTime) {
        this.startTime = startTime;
    }

    public Time getEndTime() {
        return endTime;
    }

    public void setEndTime(Time endTime) {
        this.endTime = endTime;
    }

    public String getEventDesc() {
        return eventDesc;
    }

    public void setEventDesc(String eventDesc) {
        this.eventDesc = eventDesc;
    }

    public Date getDoe() {
        return doe;
    }

    public void setDoe(Date doe) {
        this.doe = doe;
    }


    public List<Ticket> getTickets() {
        return tickets;
    }

    public void setTickets(List<Ticket> tickets) {
        this.tickets = tickets;
    }

    public List<EventArtwork> getEventArtworks() {
        return eventArtworks;
    }

    public void setEventArtworks(List<EventArtwork> eventArtworks) {
        this.eventArtworks = eventArtworks;
    }
}
