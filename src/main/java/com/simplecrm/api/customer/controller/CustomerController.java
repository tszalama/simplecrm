package com.simplecrm.api.customer.controller;

import com.simplecrm.api.customer.dto.CustomerDto;
import com.simplecrm.api.customer.service.CustomerService;
import com.simplecrm.api.customer.service.impl.CustomerServiceImpl;
import com.simplecrm.api.customer.dto.PaginationResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/customer")
public class CustomerController {
    private final CustomerService customerService;

    @Autowired
    public CustomerController(CustomerService customerService) {
        this.customerService = customerService;
    }

    @GetMapping
    public ResponseEntity<PaginationResponse<CustomerDto>> getCustomers(
            @RequestParam(value = "page", defaultValue = "0", required = false) int page,
            @RequestParam(value = "pageSize", defaultValue = "10", required = false) int pageSize){
        return new ResponseEntity<>(customerService.getCustomers(page, pageSize), HttpStatus.OK);
    }

    @GetMapping(path= "{customerId}")
    public  ResponseEntity<CustomerDto> getCustomerById(
            @PathVariable("customerId") Long customerId) {
        return new ResponseEntity<>(customerService.getCustomerById(customerId), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<CustomerDto> createCustomer(
            @RequestBody CustomerDto customerDto) {
        return new ResponseEntity<>(customerService.createCustomer(customerDto), HttpStatus.OK);
    }

    @PatchMapping(path = "{customerId}")
    public ResponseEntity<CustomerDto> updateCustomer(
            @PathVariable("customerId") Long customerId,
            @RequestBody CustomerDto customerDto){
        return new ResponseEntity<>(customerService.updateCustomer(customerId, customerDto), HttpStatus.OK);
    }
}
