package com.dbproject.artgallery.service;

import com.dbproject.artgallery.model.Artwork;
import com.dbproject.artgallery.model.Event;
import com.dbproject.artgallery.model.EventArtwork;
import com.dbproject.artgallery.repository.ArtworkRepository;
import com.dbproject.artgallery.repository.EventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class EventServiceImp implements EventServiceInterface{
    @Autowired
    EventRepository eventRepository;
    @Autowired
    ArtworkRepository artworkRepository;
    @Override
    public String addEvents(Event event) {
        eventRepository.save(event);
        return "Successful";
    }

    public void associateArtworkWithEvent(Event event, List<Object[]> artworkTuples) {
        List<EventArtwork> eventArtworks = new ArrayList<>();
        for (Object[] artworkTuple : artworkTuples) {
            Integer artworkId = (Integer) artworkTuple[0];
            String artworkName = (String) artworkTuple[1];

            // Retrieve or create artwork
            Artwork artwork = artworkRepository.findById(String.valueOf(artworkId))
                    .orElse(new Artwork(artworkName));

            // Associate artwork with event
            EventArtwork eventArtwork = new EventArtwork(event, artwork);
            eventArtworks.add(eventArtwork);
        }
        event.setEventArtworks(eventArtworks);
        eventRepository.save(event);
    }
    @Override
    public List<Event> getAllEvents() {
        return eventRepository.findAll();
    }

    public List<Event> getEventsByDoe(){return eventRepository.findEventsFromDate(LocalDate.now());}
    @Override
    public Optional<Event> getEventById(int eventId) {
        return eventRepository.findById(eventId);
    }

    public Event updateEvent(Event event) {
        return eventRepository.save(event);
    }

    public List<Event> getEventsWithArtworks() {
        return eventRepository.findAllWithArtworks();
    }
}
