package com.example.storeapplication.controller;

import com.example.storeapplication.exception.ProductNotFoundException;
import com.example.storeapplication.model.Product;
import com.example.storeapplication.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.data.domain.Page;

@RestController
@CrossOrigin("*")
public class ProductController {
    @Autowired
    private ProductService service;

    @GetMapping("/products")
    public ResponseEntity<Page<Product>> getAllProducts(@RequestParam(defaultValue = "0") int page,
                                                        @RequestParam(defaultValue = "4") int size){
        return new ResponseEntity<>(service.findAllProducts(PageRequest.of(page, size)), HttpStatus.OK);
    }

    @PostMapping("/products")
    public ResponseEntity<Product> addProduct(@RequestBody Product product){
        return new ResponseEntity<>(service.saveProduct(product), HttpStatus.CREATED);
    }

    @GetMapping("/products/{id}")
    public ResponseEntity<Product> getProductById(@PathVariable("id") Long id){
        return new ResponseEntity<>(service.findProductById(id), HttpStatus.OK);
    }

    @PutMapping("/products/{id}")
    public ResponseEntity<Product> updateProduct(@PathVariable("id") Long id, @RequestBody Product product){
        return new ResponseEntity<>(service.updateProduct(id, product), HttpStatus.OK);
    }

    @DeleteMapping("/products/{id}")
    public ResponseEntity<String> deleteProduct(@PathVariable("id") Long id){
        try {
            service.deleteProduct(id);
            return ResponseEntity.noContent().build();
        } catch (ProductNotFoundException e) {
            return ResponseEntity.notFound().build();
        } catch (Exception e) {
            return ResponseEntity.internalServerError().build();
        }
    }

    @GetMapping("/products/search")
    public ResponseEntity<Page<Product>> searchProducts(@RequestParam(defaultValue = "") String name,
                                       @RequestParam(defaultValue = "0") int page,
                                       @RequestParam(defaultValue = "4") int size){
        return new ResponseEntity<>(service.getProductsByName(name, page, size), HttpStatus.OK);
    }

}
