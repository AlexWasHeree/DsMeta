package com.aws.dsmeta.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.aws.dsmeta.entities.Sale;

public interface SaleRepository extends JpaRepository<Sale, Long>{
	
}
