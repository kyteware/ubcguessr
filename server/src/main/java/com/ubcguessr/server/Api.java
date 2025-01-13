package com.ubcguessr.server;

import java.util.ArrayList;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class Api {
    int num;
    String str;
    ArrayList<Image360> imgs = new ArrayList<Image360>();

    public Api() {
        fetchImgData();
        loadImgDb();
    }
    
    private void loadImgDb() {
        // load the data from the database
    }

    private void fetchImgData() {
        // get img data from db
    }

    
    public ArrayList<Image360> getImgs() {
        return imgs;
    }

    @GetMapping("/example")
    public String getNumber() {
        num++;
        return String.valueOf(num);
    }

    @GetMapping("/example2")
    public String getString() {
        str = "Ryan";
        return str;
    }
}
