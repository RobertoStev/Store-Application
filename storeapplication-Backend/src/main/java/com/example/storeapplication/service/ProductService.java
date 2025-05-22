package com.example.storeapplication.service;

import com.example.storeapplication.exception.ProductNotFoundException;
import com.example.storeapplication.model.Product;
import com.example.storeapplication.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.data.domain.Pageable;

@Service
public class ProductService {
    @Autowired
    private ProductRepository repository;

    public Page<Product> findAllProducts(Pageable pageable){
        return repository.findAll(pageable);
    }

    public Product saveProduct(Product product){
        return repository.save(product);
    }

    public Product findProductById(Long id){
        return repository.findById(id).orElseThrow(() -> new ProductNotFoundException("Product with id = " + id + " does not exist"));
    }

    public Product updateProduct(Long id, Product product){
        Product existingProduct = repository.findById(id).orElseThrow(() -> new ProductNotFoundException("Product with id = " + id + " does not exist"));

        existingProduct.setName(product.getName());
        existingProduct.setDescription(product.getDescription());
        existingProduct.setCategory(product.getCategory());
        existingProduct.setPrice(product.getPrice());
        existingProduct.setQuantityInStock(product.getQuantityInStock());
        existingProduct.setImageURL((product.getImageURL()));

        return repository.save(existingProduct);
    }

    public boolean deleteProduct(Long id){
        if (repository.existsById(id)) {
            repository.deleteById(id);
            return true;
        }
        throw new ProductNotFoundException("Product with id = " + id + " does not exist");
    }

    public Page<Product> getProductsByName(String name, int page, int size){
        Pageable pageable = PageRequest.of(page, size);
        return repository.findByNameContainingIgnoreCase(name, pageable);
    }
}
