package com.cronosuchoa.dsvendas.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cronosuchoa.dsvendas.dto.saleDTO;
import com.cronosuchoa.dsvendas.service.SaleService;

@RestController
@RequestMapping(value = "/sales")
public class SaleControllers {
	
	@Autowired	
	private SaleService service;
	
	@GetMapping
	public ResponseEntity<Page<saleDTO>> findAll(Pageable pageable){
		Page<saleDTO> list = service.findAll(pageable);
		return ResponseEntity.ok(list);
		
	}

}
