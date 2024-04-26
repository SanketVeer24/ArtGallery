package com.dbproject.artgallery.repository;

import com.dbproject.artgallery.model.Artwork;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface ArtworkRepository extends JpaRepository<Artwork, String> {
    List<Artwork> findAll();
    List<Artwork> findByPurchaseStatus(String purchaseStatus);
}
