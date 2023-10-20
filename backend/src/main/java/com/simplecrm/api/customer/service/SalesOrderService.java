package com.simplecrm.api.customer.service;

import com.simplecrm.api.customer.dto.PaginationResponse;
import com.simplecrm.api.customer.dto.SalesOrderDto;

public interface SalesOrderService {
    public SalesOrderDto getSalesOrderById(Long salesOrderId);
    public PaginationResponse<SalesOrderDto> getSalesOrders(int page, int pageSize);
    public SalesOrderDto createSalesOrder(SalesOrderDto salesOrderDto);
    public SalesOrderDto updateSalesOrder(Long salesOrderId, SalesOrderDto salesOrderDto);
    public void deleteSalesOrder(Long salesOrderId);
    public PaginationResponse<SalesOrderDto> getSalesOrdersByCustomerId(Long customerId, int page, int pageSize);

}
