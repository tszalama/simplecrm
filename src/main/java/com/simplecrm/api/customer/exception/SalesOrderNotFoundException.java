package com.simplecrm.api.customer.exception;

public class SalesOrderNotFoundException extends RuntimeException{
    public SalesOrderNotFoundException(String message) {
        super(message);
    }
}
