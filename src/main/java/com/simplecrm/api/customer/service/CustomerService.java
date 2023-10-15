package com.simplecrm.api.customer.service;

import com.simplecrm.api.customer.dto.CustomerDto;
import com.simplecrm.api.customer.model.Customer;
import com.simplecrm.api.response.PaginationResponse;

public interface CustomerService {
    PaginationResponse<CustomerDto> getCustomers(int page, int pageSize);
    CustomerDto createCustomer(CustomerDto customerDto);
    CustomerDto updateCustomer(Long customerId,CustomerDto customerDto);

}
