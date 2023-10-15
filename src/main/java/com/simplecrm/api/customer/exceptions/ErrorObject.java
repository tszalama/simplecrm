package com.simplecrm.api.customer.exceptions;

import lombok.Data;

import java.util.Date;

@Data
public class ErrorObject {
    public Integer statusCode;
    private String message;
    private Date timestamp;
}
