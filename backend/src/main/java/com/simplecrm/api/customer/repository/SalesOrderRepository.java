package com.simplecrm.api.customer.repository;

import com.simplecrm.api.customer.model.SalesOrder;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SalesOrderRepository extends JpaRepository<SalesOrder,Long> {
    Page<SalesOrder> findByCustomerId(long customerId, PageRequest pageRequest);
}
