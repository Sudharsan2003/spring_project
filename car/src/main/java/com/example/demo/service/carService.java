package com.example.demo.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Entity.car;
import com.example.demo.repo.repo;

@Service
public class carService {
	@Autowired
	public repo r;
	
	//get
	public List<car> getAllDetails(){
 return r.findAll();
	}
	//post
	public car addaddress(car q) {
		return r.saveAndFlush(q);
	}
	//delete
	public void deleteaddress(int id) {
    r.deleteById(id);
	}
	//put
	public car updateaddress(int id,car q) {
		return r.saveAndFlush(q);
	}
	
	
}
	


