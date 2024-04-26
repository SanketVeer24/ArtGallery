package com.dbproject.artgallery.repository;

import com.dbproject.artgallery.model.Ticket;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface TicketRepository extends JpaRepository<Ticket, Integer> {

    List<Ticket> findByCustomerCustomerId(Integer customerId);
    List<Ticket> findByEventEventId(Integer eventId);
    List<Ticket> findAll();
    Optional<Ticket> findById(Integer ticketId);

    @Query("SELECT t.event.eventId, c.customerName, c.email, c.phone, t.amount FROM Ticket t JOIN t.event e JOIN t.customer c ORDER BY t.event.eventId")
    List<Object[]> findAllCustomerDetailsSortedByEventId();
}
