package com.simplecrm.api.customer.controller;

import com.simplecrm.api.customer.dto.PaginationResponse;
import com.simplecrm.api.customer.dto.SalesOrderDto;
import com.simplecrm.api.customer.repository.SalesOrderRepository;
import com.simplecrm.api.customer.service.SalesOrderService;
import com.simplecrm.api.customer.service.impl.SalesOrderServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/salesorder")
public class SalesOrderController {
    private final SalesOrderService salesOrderService;

    @Autowired
    public SalesOrderController(SalesOrderService salesOrderService) {
        this.salesOrderService = salesOrderService;
    }

    @GetMapping
    public ResponseEntity<PaginationResponse<SalesOrderDto>> getSalesOrders(
            @RequestParam(value = "page", defaultValue = "0", required = false) int page,
            @RequestParam(value = "pageSize", defaultValue = "10", required = false) int pageSize) {
        return new ResponseEntity<>(salesOrderService.getSalesOrders(page, pageSize), HttpStatus.OK);
    }

    @GetMapping( path = "{salesOrderId}")
    public ResponseEntity<SalesOrderDto> getSalesOrderById(
            @PathVariable("salesOrderId") Long salesOrderId) {
        return new ResponseEntity<>(salesOrderService.getSalesOrderById(salesOrderId), HttpStatus.OK);
    }

    @PostMapping
    public  ResponseEntity<SalesOrderDto> createSalesOrder(
            @RequestBody SalesOrderDto salesOrderDto) {
        return new ResponseEntity<>(salesOrderService.createSalesOrder(salesOrderDto), HttpStatus.CREATED);
    }

    @PatchMapping( path = "{salesOrderId}")
    public ResponseEntity<SalesOrderDto> updateSalesOrder(
            @PathVariable("salesOrderId") Long salesOrderId) {
        return new ResponseEntity<>(salesOrderService.getSalesOrderById(salesOrderId), HttpStatus.OK);
    }

    @DeleteMapping( path = "{salesOrderId}")
    public ResponseEntity<Void> deleteSalesOrder(
            @PathVariable("salesOrderId") Long salesOrderId) {
        salesOrderService.deleteSalesOrder(salesOrderId);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping(path = "bycustomer")
    public ResponseEntity<PaginationResponse<SalesOrderDto>> getSalesOrdersByCustomerId(
            @RequestParam(value = "page", defaultValue = "0", required = false) int page,
            @RequestParam(value = "pageSize", defaultValue = "10", required = false) int pageSize,
            @RequestParam(value = "customerId", required = true) Long customerId) {
        return new ResponseEntity<>(salesOrderService.getSalesOrdersByCustomerId(customerId, page, pageSize), HttpStatus.OK);
    }
}
