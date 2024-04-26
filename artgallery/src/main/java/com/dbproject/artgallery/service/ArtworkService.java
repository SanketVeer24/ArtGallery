package com.dbproject.artgallery.service;

import com.dbproject.artgallery.model.Artwork;
import com.dbproject.artgallery.repository.ArtworkRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ArtworkService {
    @Autowired
    private ArtworkRepository artworkRepository;
    public List<Artwork> findAllArtworks() {
        return artworkRepository.findAll(); // Assuming you have a custom findAll method in ArtworkRepository
    }

    public Optional<Artwork> findArtworkById(int artworkId) {
        return artworkRepository.findById(String.valueOf(artworkId));
    }
    public Artwork saveArtwork(Artwork artwork) {
        return artworkRepository.save(artwork);
    }

    public Artwork getArtworkById(int artworkId) {
        return artworkRepository.findById(String.valueOf(artworkId)).orElse(null);
    }

}
