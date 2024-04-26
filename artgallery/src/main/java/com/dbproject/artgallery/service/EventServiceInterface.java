package com.dbproject.artgallery.service;

import com.dbproject.artgallery.model.Event;

import java.util.List;
import java.util.Optional;

public interface EventServiceInterface {

    public String addEvents(Event event);
    public List<Event> getAllEvents();
    public Optional<Event> getEventById(int eventId);
}
