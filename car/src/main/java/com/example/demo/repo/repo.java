package com.example.demo.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Entity.car;


public interface  repo extends JpaRepository<car,Integer>{

}
