package com.dbproject.artgallery.service;

import com.dbproject.artgallery.model.Customer;
import com.dbproject.artgallery.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CustomerServiceImp implements CustomerServiceInterface{
    @Autowired
    CustomerRepository customerRepository;
    @Override
    public String addCustomers(Customer customer) {
        customerRepository.save(customer);
        return "Successful";
    }

    @Override
    public List<Customer> getAllCustomers() {
        return customerRepository.findAll();
    }

    @Override
    public Optional<Customer> getCustomerById(int customerId) {
        return customerRepository.findById(customerId);
    }
}
