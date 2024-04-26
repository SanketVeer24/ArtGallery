package com.dbproject.artgallery.service;

import com.dbproject.artgallery.model.Customer;
import com.dbproject.artgallery.model.Event;
import com.dbproject.artgallery.model.Ticket;
import com.dbproject.artgallery.model.TicketBookingRequest;
import com.dbproject.artgallery.repository.CustomerRepository;
import com.dbproject.artgallery.repository.EventRepository;
import com.dbproject.artgallery.repository.TicketRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class TicketServiceImp implements TicketServiceInterface{
    @Autowired
    TicketRepository ticketRepository;

    @Autowired
    private CustomerRepository customerRepository;

    @Autowired
    private EventRepository eventRepository;

    @Transactional
    public void bookTickets(Integer eventId, String customerName, String email, String phone, double amount) {
        // Create the customer
        Customer customer = new Customer();
        customer.setCustomerName(customerName);
        customer.setEmail(email);
        customer.setPhone(phone);

        customerRepository.save(customer);

        Event event = eventRepository.findById(eventId)
                .orElseThrow(() -> new EntityNotFoundException("Event not found with ID: " + eventId));

        // Create the ticket
        Ticket ticket = new Ticket();
        ticket.setAmount(amount);

        // Set the eventId in the ticket
        ticket.setEvent(event);

        // Set the customer for the ticket
        ticket.setCustomer(customer);

        // Save the ticket
        ticketRepository.save(ticket);
    }

    // Method to retrieve tickets by customerId
    public List<Ticket> getTicketsByCustomerId(Integer customerId) {
        return ticketRepository.findByCustomerCustomerId(customerId);
    }

    // Method to retrieve tickets by eventId
    public List<Ticket> getTicketsByEventId(Integer eventId) {
        return ticketRepository.findByEventEventId(eventId);
    }

    @Transactional
    public List<TicketBookingRequest> findAllCustomerDetailsSortedByEventId() {
        List<Object[]> customerDetails = ticketRepository.findAllCustomerDetailsSortedByEventId();

        // Map the Object arrays to TicketBookingRequest objects
        return customerDetails.stream()
                .map(obj -> new TicketBookingRequest(
                        (Integer) obj[0],          // eventId
                        (String) obj[1],           // customerName
                        (String) obj[2],           // email
                        (String) obj[3],           // phone
                        (Double) obj[4]            // amount
                ))
                .collect(Collectors.toList()).reversed();
    }


}
