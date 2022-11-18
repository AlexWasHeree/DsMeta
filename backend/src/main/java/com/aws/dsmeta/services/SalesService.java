package com.aws.dsmeta.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.aws.dsmeta.entities.Sale;
import com.aws.dsmeta.repositories.SaleRepository;

@Service
public class SalesService {
	
	@Autowired
	private SaleRepository repo;
	
	public List<Sale> findSales() {
		return repo.findAll();
	}
}
