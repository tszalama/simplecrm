package com.simplecrm.api.customer.dto;

import com.simplecrm.api.customer.model.Customer;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SalesOrderDto {
    private Long id;
    private String title;
    private Long customerId;
}
