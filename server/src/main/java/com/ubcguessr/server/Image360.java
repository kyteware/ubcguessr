package com.ubcguessr.server;

import jakarta.persistence.*;

@Entity
public class Image360 {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    // @Column(name = "url", nullable = false)
    private String url;
    // @Column(name = "latitude", nullable = false)
    private float lat;
    // @Column(name = "longitude", nullable = false)
    private float lon;

    public Image360(String url, float lat, float lon) {
        this.url = url;
        this.lat = lat;
        this.lon = lon;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public void setLat(float lat) {
        this.lat = lat;
    }

    public void setLon(float lon) {
        this.lon = lon;
    }

    public String getUrl() {
        return this.url;
    }

    public float getLat() {
        return this.lat;
    }

    public float getLon() {
        return this.lon;
    }
}
