package com.simplecrm.crm.customer;

import com.simplecrm.crm.pagination.PaginationResponse;
import org.springframework.beans.factory.annotation.Autowired;
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
    public PaginationResponse<Customer> getCustomers(
            @RequestParam(value = "page", defaultValue = "0", required = false) int page,
            @RequestParam(value = "pageSize", defaultValue = "10", required = false) int pageSize){
        return customerService.getCustomers(page, pageSize);
    }
    @PostMapping
    public Customer postCustomer(
            @RequestBody Customer customer) {
        return customerService.postCustomer(customer);
    }

    @PatchMapping(path = "{customerId}")
    public Customer patchCustomer(
            @PathVariable("customerId") Long customerId,
            @RequestBody Customer customer){
        return  customerService.patchCustomer(customerId, customer);
    }
}
