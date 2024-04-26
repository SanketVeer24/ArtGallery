package com.dbproject.artgallery.repository;

import com.dbproject.artgallery.model.Event;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface EventRepository extends JpaRepository<Event, Integer> {
    @Query("SELECT e FROM Event e ORDER BY e.doe")
    List<Event> findAllSortedByDoe();

    @Query("SELECT e FROM Event e WHERE e.doe >= CURRENT_DATE ORDER BY e.doe")
    List<Event> findEventsFromDate(LocalDate currentDate);

    @Query("SELECT DISTINCT e FROM Event e LEFT JOIN FETCH e.eventArtworks")
    List<Event> findAllWithArtworks();
}
