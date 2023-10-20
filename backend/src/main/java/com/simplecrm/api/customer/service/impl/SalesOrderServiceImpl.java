package com.simplecrm.api.customer.service.impl;

import com.simplecrm.api.customer.dto.PaginationResponse;
import com.simplecrm.api.customer.dto.SalesOrderDto;
import com.simplecrm.api.customer.exception.CustomerNotFoundException;
import com.simplecrm.api.customer.exception.SalesOrderNotFoundException;
import com.simplecrm.api.customer.model.Customer;
import com.simplecrm.api.customer.model.SalesOrder;
import com.simplecrm.api.customer.repository.CustomerRepository;
import com.simplecrm.api.customer.repository.SalesOrderRepository;
import com.simplecrm.api.customer.service.SalesOrderService;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class SalesOrderServiceImpl implements SalesOrderService {

    private final SalesOrderRepository salesOrderRepository;
    private final CustomerRepository customerRepository;

    static Logger logger = LogManager.getLogger(SalesOrderServiceImpl.class.getName());

    @Autowired
    public SalesOrderServiceImpl(
            SalesOrderRepository salesOrderRepository,
            CustomerRepository customerRepository){
        this.salesOrderRepository = salesOrderRepository;
        this.customerRepository = customerRepository;
    }
    @Override
    public SalesOrderDto getSalesOrderById(Long salesOrderId) {
        final SalesOrder existingSalesOrder = salesOrderRepository.findById(salesOrderId).orElseThrow(
                () -> new SalesOrderNotFoundException("Sales order with id " + salesOrderId + " does not exist")
        );
        return mapToDto(existingSalesOrder);
    }

    @Override
    public PaginationResponse<SalesOrderDto> getSalesOrders(int page, int pageSize) {
        final PageRequest pageRequest = PageRequest.of(page,pageSize);
        final Page<SalesOrder> salesOrderPage = salesOrderRepository.findAll(pageRequest);
        final List<SalesOrderDto> salesOrderDtoList = salesOrderPage.stream().map(n -> mapToDto(n)).collect(Collectors.toList());
        return createPaginationResponse(salesOrderDtoList, salesOrderPage);
    }

    @Override
    public SalesOrderDto createSalesOrder(SalesOrderDto salesOrderDto) {
        final SalesOrder salesOrder = new SalesOrder();
        salesOrder.setTitle(salesOrderDto.getTitle());
        if(salesOrderDto.getCustomerId() != null) {
            final Customer existingCustomer = customerRepository.findById(salesOrderDto.getCustomerId()).orElseThrow(
                    () -> new CustomerNotFoundException("Customer with id " + salesOrderDto.getCustomerId() + " does not exist")
            );
            salesOrder.setCustomer(existingCustomer);
        }
        SalesOrder newSalesOrder = salesOrderRepository.save(salesOrder);
        return  mapToDto(newSalesOrder);
    }

    @Override
    public void deleteSalesOrder(Long salesOrderId) {
        final SalesOrder existingSalesOrder = salesOrderRepository.findById(salesOrderId).orElseThrow(
                () -> new SalesOrderNotFoundException("Sales order with id " + salesOrderId + " not found")
        );
        salesOrderRepository.deleteById(salesOrderId);
    }

    @Override
    public PaginationResponse<SalesOrderDto> getSalesOrdersByCustomerId(Long customerId, int page, int pageSize) {
        final PageRequest pageRequest = PageRequest.of(page, pageSize);
        final Page<SalesOrder> salesOrderPage = salesOrderRepository.findByCustomerId(customerId,pageRequest);
        final List<SalesOrderDto> salesOrderDtoList = salesOrderPage.stream().map(n -> mapToDto(n)).collect(Collectors.toList());
        return createPaginationResponse(salesOrderDtoList, salesOrderPage);
    }

    @Override
    @Transactional
    public SalesOrderDto updateSalesOrder(Long salesOrderId, SalesOrderDto salesOrderDto) {
        final SalesOrder existingSalesOrder = salesOrderRepository.findById(salesOrderId).orElseThrow(
                () -> new SalesOrderNotFoundException("Sales order with id " + salesOrderId + " not found")
        );
        if(salesOrderDto.getTitle() != null) {
            existingSalesOrder.setTitle(salesOrderDto.getTitle());
        }
        if(salesOrderDto.getCustomerId() != null) {
            final Customer existingCustomer = customerRepository.findById(salesOrderDto.getId()).orElseThrow(
                    () -> new CustomerNotFoundException("Customer with id " + salesOrderDto.getId() + " does not exist")
            );
            existingSalesOrder.setCustomer(existingCustomer);
        }
        return mapToDto(existingSalesOrder);
    }

    private SalesOrderDto mapToDto(SalesOrder salesOrder){
        final SalesOrderDto salesOrderDto = new SalesOrderDto();
        salesOrderDto.setTitle(salesOrder.getTitle());
        salesOrderDto.setId(salesOrder.getId());
        final Customer customer = salesOrder.getCustomer();
        if(customer != null) {
            salesOrderDto.setCustomerId(customer.getId());
        }
        return salesOrderDto;
    }

    private PaginationResponse<SalesOrderDto> createPaginationResponse(List<SalesOrderDto> salesOrderDtoList, Page<SalesOrder> salesOrderPage) {
        final PaginationResponse<SalesOrderDto> response = new PaginationResponse<SalesOrderDto>();
        response.setContent(salesOrderDtoList);
        response.setPage(salesOrderPage.getNumber());
        response.setTotalPages(salesOrderPage.getTotalPages());
        response.setTotalElements(salesOrderPage.getTotalElements());
        response.setPageSize(salesOrderPage.getSize());

        return response;
    }
}
