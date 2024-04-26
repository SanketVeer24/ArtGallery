package com.dbproject.artgallery.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;

@Entity
@Table(name = "event_artwork")
public class EventArtwork {
    @Id
    @ManyToOne
    @JoinColumn(name = "event_id")
    @JsonBackReference
    private Event event;

    @Id
    @ManyToOne
    @JoinColumn(name = "artwork_id")
    @JsonManagedReference
    private Artwork artwork;

    public EventArtwork() {
    }

    public EventArtwork(Event event, Artwork artwork) {
        this.event = event;
        this.artwork = artwork;
    }

    public Event getEvent() {
        return event;
    }

    public void setEvent(Event event) {
        this.event = event;
    }

    public Artwork getArtwork() {
        return artwork;
    }

    public void setArtwork(Artwork artwork) {
        this.artwork = artwork;
    }
}
