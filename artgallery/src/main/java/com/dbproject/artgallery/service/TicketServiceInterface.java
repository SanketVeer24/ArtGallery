package com.dbproject.artgallery.service;

import com.dbproject.artgallery.model.Ticket;

import java.util.List;

public interface TicketServiceInterface {


    public List<Ticket> getTicketsByCustomerId(Integer customerId);

    public List<Ticket> getTicketsByEventId(Integer eventId);

}
