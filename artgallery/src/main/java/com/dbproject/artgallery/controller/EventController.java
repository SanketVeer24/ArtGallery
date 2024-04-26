package com.dbproject.artgallery.controller;

import com.dbproject.artgallery.model.Event;
import com.dbproject.artgallery.model.EventWithArtworkDto;
import com.dbproject.artgallery.repository.EventRepository;
import com.dbproject.artgallery.service.EventServiceImp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.sql.Time;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/events")
@CrossOrigin
public class EventController {

    @Autowired
    EventServiceImp eventServiceImp;
    @Autowired
    EventRepository eventRepository;
    @PostMapping(value = "/add", consumes = {"application/json"})
    public String addEvent(@RequestBody EventWithArtworkDto eventDto){
        Event event = new Event();
        event.setEventName(eventDto.getEventName());
        event.setEventType(eventDto.getEventType());
        event.setDoe(eventDto.getDoe());
        event.setEventDesc(eventDto.getEventDesc());
        Time startTime = Time.valueOf(eventDto.getStartTime());
        Time endTime = Time.valueOf(eventDto.getEndTime());

        event.setStartTime(startTime);
        event.setEndTime(endTime);

        // Associate artworks with the event
        eventServiceImp.associateArtworkWithEvent(event, eventDto.getEventArtwork());

        return "Successful";
    }

    @PutMapping(value = "/update/{eventId}", consumes = {"application/json"})
    public ResponseEntity<String> updateEvent(@PathVariable Integer eventId, @RequestBody EventWithArtworkDto eventDto) {
        Optional<Event> optionalEvent = eventRepository.findById(eventId);
        if (optionalEvent.isPresent()) {
            Event event = optionalEvent.get();
            event.setEventName(eventDto.getEventName());
            event.setEventType(eventDto.getEventType());
            event.setDoe(eventDto.getDoe());
            event.setEventDesc(eventDto.getEventDesc());
            Time startTime = Time.valueOf(eventDto.getStartTime());
            Time endTime = Time.valueOf(eventDto.getEndTime());

            event.setStartTime(startTime);
            event.setEndTime(endTime);

            // Associate artworks with the event
            eventServiceImp.associateArtworkWithEvent(event, eventDto.getEventArtwork());

            eventRepository.save(event); // Save the updated event
            return ResponseEntity.ok("Event updated successfully");
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/all")
    public List<Event> getAllEvents(){
        return eventServiceImp.getAllEvents();
    }

    @GetMapping("/allDoe")
    public List<Event> getAllEventsByDoe(){
        return eventServiceImp.getEventsByDoe();
    }

    @GetMapping("/{eventId}")
    public Optional<Event> getEventById(@PathVariable int eventId){
        return eventServiceImp.getEventById(eventId);
    }

    @GetMapping("/with-artworks")
    public ResponseEntity<List<Event>> getEventsWithArtworks() {
        List<Event> events = eventServiceImp.getEventsWithArtworks();
        return ResponseEntity.ok(events);
    }
}
