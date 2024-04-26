package com.dbproject.artgallery.model;

import java.sql.Date;
import java.sql.Time;
import java.time.LocalTime;
import java.util.List;

public class EventWithArtworkDto {
    private String eventName;
    private String eventType;
    private Date doe;
    private String startTime;
    private String endTime;
    private String eventDesc;
    private List<Object[]> eventArtwork;

    // Getters and setters
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

    public Date getDoe() {
        return doe;
    }

    public void setDoe(Date doe) {
        this.doe = doe;
    }

    public String getStartTime() {
        return startTime;
    }

    public void setStartTime(String startTime) {
        this.startTime = startTime;
    }

    public String getEndTime() {
        return endTime;
    }

    public void setEndTime(String endTime) {
        this.endTime = endTime;
    }

    public String getEventDesc() {
        return eventDesc;
    }

    public void setEventDesc(String eventDesc) {
        this.eventDesc = eventDesc;
    }

    public List<Object[]> getEventArtwork() {
        return eventArtwork;
    }

    public void setEventArtwork(List<Object[]> eventArtwork) {
        this.eventArtwork = eventArtwork;
    }
}
