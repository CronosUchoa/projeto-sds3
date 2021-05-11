package com.cronosuchoa.dsvendas.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cronosuchoa.dsvendas.dto.SaleSuccessDTO;
import com.cronosuchoa.dsvendas.dto.SaleSumDTO;
import com.cronosuchoa.dsvendas.dto.saleDTO;
import com.cronosuchoa.dsvendas.entities.Sale;
import com.cronosuchoa.dsvendas.repositories.SaleRepository;
import com.cronosuchoa.dsvendas.repositories.SellerRepository;

@Service
public class SaleService {
	
	@Autowired
	private SaleRepository repository;
	
	@Autowired
	private SellerRepository sellerRepository;
	
	@Transactional(readOnly = true)
	public Page<saleDTO> findAll(Pageable pageable){
		sellerRepository.findAll(); 
		Page<Sale> result = repository.findAll(pageable);
		return result.map(x -> new saleDTO(x));
	}
	
	@Transactional(readOnly = true)
	public List<SaleSumDTO> amountGroupedBySeller(){
		return repository.amountGroupedBySeller();
	}
	
	@Transactional(readOnly = true)
	public List<SaleSuccessDTO> successGroupedBySeller(){
		return repository.successGroupedBySeller();
		
	}
}
