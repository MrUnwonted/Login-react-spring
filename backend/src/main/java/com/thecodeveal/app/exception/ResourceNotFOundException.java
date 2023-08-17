package com.thecodeveal.app.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class ResourceNotFOundException extends  RuntimeException{
    public ResourceNotFOundException(String message){
        super(message);
    }
}