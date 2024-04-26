package com.dbproject.artgallery.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
public class Artwork {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "artwork_id")
    private int artworkId;

    @Column(name = "artwork_name")
    private String artworkName;

    @Column(name = "artist")
    private String artist;

    @Column(name = "art_type")
    private String artType;

    @Column(name = "creation_year")
    private int creationYear;

    @Column(name = "purchase_status")
    private String purchaseStatus;

    @Column(name = "art_desc")
    private String artDesc;

    @Column(name = "art_image")
    private byte[] artImage;

    @OneToMany(mappedBy = "artwork", cascade = CascadeType.ALL)
    @JsonBackReference
    private List<EventArtwork> eventArtworks = new ArrayList<>();


    // Constructors
    public Artwork() {
    }

    public Artwork(int artworkId, String artworkName, String artist, String artType, int creationYear, String purchaseStatus, String artDesc, byte[] artImage) {
        this.artworkId = artworkId;
        this.artworkName = artworkName;
        this.artist = artist;
        this.artType = artType;
        this.creationYear = creationYear;
        this.purchaseStatus = purchaseStatus;
        this.artDesc = artDesc;
        this.artImage = artImage;
    }

    public Artwork(int artworkId, String artworkName, String artist, String artType, int creationYear, String purchaseStatus, String artDesc, byte[] artImage, List<EventArtwork> eventArtworks) {
        this.artworkId = artworkId;
        this.artworkName = artworkName;
        this.artist = artist;
        this.artType = artType;
        this.creationYear = creationYear;
        this.purchaseStatus = purchaseStatus;
        this.artDesc = artDesc;
        this.artImage = artImage;
        this.eventArtworks = eventArtworks;
    }

    public Artwork(String artworkName) {
        this.artworkName=artworkName;
    }

    // Getters and Setters
    public int getArtworkId() {
        return artworkId;
    }

    public void setArtworkId(int artworkId) {
        this.artworkId = artworkId;
    }

    public String getArtworkName() {
        return artworkName;
    }

    public void setArtworkName(String artworkName) {
        this.artworkName = artworkName;
    }

    public String getArtist() {
        return artist;
    }

    public void setArtist(String artist) {
        this.artist = artist;
    }

    public String getArtType() {
        return artType;
    }

    public void setArtType(String artType) {
        this.artType = artType;
    }

    public int getCreationYear() {
        return creationYear;
    }

    public void setCreationYear(int creationYear) {
        this.creationYear = creationYear;
    }

    public String getPurchaseStatus() {
        return purchaseStatus;
    }

    public void setPurchaseStatus(String purchaseStatus) {
        this.purchaseStatus = purchaseStatus;
    }

    public String getArtDesc() {
        return artDesc;
    }

    public void setArtDesc(String artDesc) {
        this.artDesc = artDesc;
    }
    public byte[] getArtImage() {
        return artImage;
    }

    public void setArtImage(byte[] artImage) {
        this.artImage = artImage;
    }

    public List<EventArtwork> getEventArtworks() {
        return eventArtworks;
    }

    public void setEventArtworks(List<EventArtwork> eventArtworks) {
        this.eventArtworks = eventArtworks;
    }
}
