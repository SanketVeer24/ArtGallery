package com.dbproject.artgallery.controller;

import com.dbproject.artgallery.model.Customer;
import com.dbproject.artgallery.service.CustomerServiceImp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/customers")
@CrossOrigin
public class CustomerController {
    @Autowired
    CustomerServiceImp customerServiceImp;
    @PostMapping("/add")
    public String addCustomer(@RequestBody Customer customer){
        return customerServiceImp.addCustomers(customer);
    }
    @GetMapping("/all")
    public List<Customer> getAllCustomers(){
        return customerServiceImp.getAllCustomers();
    }

    @GetMapping("/{customerId}")
    public Optional<Customer> getCustomerById(@PathVariable int customerId){
        return customerServiceImp.getCustomerById(customerId);
    }
}
