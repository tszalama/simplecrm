package com.simplecrm.api.customer.service.impl;

import com.simplecrm.api.customer.dto.CustomerDto;
import com.simplecrm.api.customer.model.Customer;
import com.simplecrm.api.customer.repository.CustomerRepository;
import com.simplecrm.api.customer.service.CustomerService;
import com.simplecrm.api.response.PaginationResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class CustomerServiceImpl implements CustomerService {
    private final CustomerRepository repository;

    @Autowired
    public CustomerServiceImpl(CustomerRepository repository) {
        this.repository = repository;
    }

    @Override
    public PaginationResponse<CustomerDto> getCustomers(int page, int pageSize) {
        PageRequest pageRequest = PageRequest.of(page, pageSize);
        Page<Customer> customerPage = repository.findAll(pageRequest);
        List<Customer> customerList = customerPage.getContent();
        List<CustomerDto> responseContent = customerList.stream().map(n -> mapToDto(n)).collect(Collectors.toList());

        PaginationResponse<CustomerDto> response = new PaginationResponse<CustomerDto>();
        response.setContent(responseContent);
        response.setPage(customerPage.getNumber());
        response.setPageSize(customerPage.getSize());
        response.setTotalPages(customerPage.getTotalPages());
        response.setTotalElements(customerPage.getTotalElements());

        return response;
    }

    @Override
    public CustomerDto createCustomer(CustomerDto customerDto){
        Customer customer = new Customer();
        customer.setName(customerDto.getName());
        customer.setEmail(customerDto.getEmail());
        Customer newCustomer = repository.save(customer);
        return mapToDto(newCustomer);
    }

    @Transactional
    @Override
    public CustomerDto updateCustomer(Long customerId,CustomerDto customerDto) {
        final Customer existingCustomer = repository.findById(customerId).orElseThrow(
                () -> new IllegalStateException("customer with id " + customerId + " does not exist")
        );
        if(customerDto.getName() != null){
            existingCustomer.setName(customerDto.getName());
        }
        if(customerDto.getEmail() != null){
            existingCustomer.setEmail(customerDto.getEmail());
        }
        return mapToDto(existingCustomer);
    }

    private CustomerDto mapToDto(Customer customer) {
        CustomerDto customerDto = new CustomerDto();
        customerDto.setId(customer.getId());
        customerDto.setName(customer.getName());
        customerDto.setEmail(customer.getEmail());
        return customerDto;
    }

}
