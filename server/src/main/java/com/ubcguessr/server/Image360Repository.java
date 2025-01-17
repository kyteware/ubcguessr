package com.ubcguessr.server;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Image360Repository extends JpaRepository<Image360, Long> { 
    
}