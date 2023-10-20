package com.simplecrm.api.customer.exception;

public class CustomerNotFoundException extends RuntimeException {
    private static final long serialVerisionUID  = 1;

    public CustomerNotFoundException(String message) {
        super(message);
    }
}
