package com.example.demo.services;
import com.example.demo.models.Product;
import com.example.demo.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {
	
	    @Autowired
	    private ProductRepository productRepository;

	    public Product saveProduct(Product product) {
	        return productRepository.save(product);
	    }

	    public List<Product> getAllProducts() {
	        return productRepository.findAll();
	    }
	}

