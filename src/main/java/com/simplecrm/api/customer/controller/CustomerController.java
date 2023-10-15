package com.simplecrm.api.customer.controller;

import com.simplecrm.api.customer.dto.CustomerDto;
import com.simplecrm.api.customer.service.impl.CustomerServiceImpl;
import com.simplecrm.api.customer.model.Customer;
import com.simplecrm.api.response.PaginationResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/customer")
public class CustomerController {
    private final CustomerServiceImpl customerService;

    @Autowired
    public CustomerController(CustomerServiceImpl customerService) {
        this.customerService = customerService;
    }

    @GetMapping
    public PaginationResponse<CustomerDto> getCustomers(
            @RequestParam(value = "page", defaultValue = "0", required = false) int page,
            @RequestParam(value = "pageSize", defaultValue = "10", required = false) int pageSize){
        return customerService.getCustomers(page, pageSize);
    }
    @PostMapping
    public CustomerDto createCustomer(
            @RequestBody CustomerDto customerDto) {
        return customerService.createCustomer(customerDto);
    }

    @PatchMapping(path = "{customerId}")
    public CustomerDto updateCustomer(
            @PathVariable("customerId") Long customerId,
            @RequestBody CustomerDto customerDto){
        return  customerService.updateCustomer(customerId, customerDto);
    }
}
