package com.dbproject.artgallery.controller;

import com.dbproject.artgallery.model.Artwork;
import com.dbproject.artgallery.model.ArtworkDto;
import com.dbproject.artgallery.repository.ArtworkRepository;
import com.dbproject.artgallery.service.ArtworkService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/artwork")
@CrossOrigin
public class ArtworkController {
    @Autowired
    private ArtworkRepository artworkRepository;
    @Autowired
    private ArtworkService artworkService;
    @GetMapping("/all")
    public List<Artwork> getAllArtwork() {
        return artworkRepository.findAll();
    }

    @GetMapping("/collections")
    public List<Artwork> getAllArtworks() {
        return artworkRepository.findByPurchaseStatus("Unsold");


    }
    @GetMapping(value = "/{artworkId}/image", produces = MediaType.IMAGE_JPEG_VALUE)
    public @ResponseBody byte[] getImage(@PathVariable int artworkId) {
        Optional<Artwork> artworkOptional = artworkRepository.findById(String.valueOf(artworkId));
        if (artworkOptional.isPresent()) {
            Artwork artwork = artworkOptional.get();
            return artwork.getArtImage(); // Assuming getArtImage() returns the byte array of the image
        } else {
            // Handle if artwork not found
            return null;
        }
    }

//    @PostMapping(value = "/add",consumes = {"application/json"})
//    public ResponseEntity<Artwork> addArtwork(@RequestBody Artwork artwork) {
//        try {
//            // Save the artwork to the database
//            Artwork savedArtwork = artworkRepository.save(artwork);
//            System.out.println(savedArtwork);
//            // Return a ResponseEntity with the saved artwork and location header
//            return ResponseEntity.created(URI.create("/api/artwork/" + savedArtwork.getArtworkId())).body(savedArtwork);
//        } catch (Exception e) {
//            // Handle any exceptions that might occur during artwork addition
//            e.printStackTrace();
//            // Return an appropriate error response
//            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
//        }
//    }

    @PostMapping(value = "/add", consumes = {"application/json"})
    public String addArtwork(@RequestBody ArtworkDto artworkDto){
        Artwork artwork=new Artwork();
        artwork.setArtworkName(artworkDto.getArtworkName());
        artwork.setArtist(artworkDto.getArtist());
        artwork.setArtType(artworkDto.getArtType());
        artwork.setCreationYear(artworkDto.getCreationYear());
        artwork.setPurchaseStatus(artworkDto.getPurchaseStatus());
        artwork.setArtDesc(artworkDto.getArtDesc());
        artwork.setArtImage(artworkDto.getArtImage());

        artworkRepository.save(artwork);

        return "Successful";
    }


    @PostMapping(value = "/update", consumes = {"application/json"})
    public ResponseEntity<?> updateArtwork(@RequestBody ArtworkDto updatedArtwork) {
        try {
            // Check if the artwork exists
            Artwork existingArtwork = artworkService.getArtworkById(updatedArtwork.getArtworkId());
            if (existingArtwork == null) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Artwork not found");
            }

            // Update the artwork with new data
            existingArtwork.setArtworkName(updatedArtwork.getArtworkName());
            existingArtwork.setPurchaseStatus(updatedArtwork.getPurchaseStatus());
            existingArtwork.setArtDesc(updatedArtwork.getArtDesc());
            existingArtwork.setArtist(updatedArtwork.getArtist());
            existingArtwork.setArtType(updatedArtwork.getArtType());
            existingArtwork.setCreationYear(updatedArtwork.getCreationYear());
            // Update the image data if necessary
            if (updatedArtwork.getArtImage() != null) {
                existingArtwork.setArtImage(updatedArtwork.getArtImage());
            }

            // Save the updated artwork
            artworkService.saveArtwork(existingArtwork);

            return ResponseEntity.ok("Artwork updated successfully");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error updating artwork: " + e.getMessage());
        }
    }
}
