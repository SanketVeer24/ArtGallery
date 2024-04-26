package com.dbproject.artgallery.controller;

import com.dbproject.artgallery.model.TicketBookingRequest;
import com.dbproject.artgallery.service.TicketServiceImp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class TicketController {

    @Autowired
    TicketServiceImp ticketServiceImp;

    @PostMapping("/ticket")
    public ResponseEntity<String> bookTickets(@RequestBody TicketBookingRequest request) {
        ticketServiceImp.bookTickets(request.getEventId(), request.getCustomerName(), request.getEmail(), request.getPhone(), request.getAmount());
        return ResponseEntity.ok("Tickets booked successfully");
    }

    @GetMapping("/customers")
    public ResponseEntity<List<TicketBookingRequest>> getAllCustomersSortedByEventId() {
        List<TicketBookingRequest> customerDetails = ticketServiceImp.findAllCustomerDetailsSortedByEventId();
        return ResponseEntity.ok(customerDetails);
    }

}
