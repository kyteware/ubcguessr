package com.ubcguessr.server;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class Api {
    int num;

    public Api() {
        num = 0;
    }
    
    @GetMapping("/example")
    public String getNumber() {
        num ++;
        return String.valueOf(num);
    }
}
