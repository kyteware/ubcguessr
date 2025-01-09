package com.ubcguessr.server;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;


@Controller
@SpringBootApplication
public class ServerApplication {
    @GetMapping("/")
    public String getMethodName(@RequestParam String param) {
        return "forward:/index.html";
    }

	public static void main(String[] args) {
		SpringApplication.run(ServerApplication.class, args);
	}
}
