package com.simplecrm.crm.customer;

import com.simplecrm.crm.pagination.PaginationResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class CustomerService {
    private final CustomerRepository repository;

    @Autowired
    public CustomerService(CustomerRepository repository) {
        this.repository = repository;
    }

    public PaginationResponse<Customer> getCustomers(int page, int pageSize) {
        PageRequest pageRequest = PageRequest.of(page, pageSize);
        Page<Customer> customerPage = repository.findAll(pageRequest);
        List<Customer> customerList = customerPage.getContent();
        return new PaginationResponse<Customer>(customerPage,customerList);
    }

    public Customer postCustomer(Customer customer){
        return repository.save(customer);
    }

    @Transactional
    public Customer patchCustomer(Long customerId,Customer customer) {
        final Customer existingCustomer = repository.findById(customerId).orElseThrow(
                () -> new IllegalStateException("customer with id " + customerId + " does not exist")
        );
        if(customer.getName() != null){
            existingCustomer.setName(customer.getName());
        }
        if(customer.getEmail() != null){
            existingCustomer.setEmail(customer.getEmail());
        }
        return existingCustomer;
    }

}
