package com.dbproject.artgallery.service;

import com.dbproject.artgallery.model.Customer;

import java.util.List;
import java.util.Optional;

public interface CustomerServiceInterface {

    public String addCustomers(Customer customer);

    public List<Customer> getAllCustomers();

    public Optional<Customer> getCustomerById(int customerId);
}
