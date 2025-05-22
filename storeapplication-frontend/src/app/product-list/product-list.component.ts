import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
  
  products: Product[];
  currentPage = 0;
  pageSize = 4;
  totalItems = 0;
  totalPages = 0;
  searchTerm = '';

  constructor(private productService: ProductService, private router: Router){}

  ngOnInit(): void {
    this.getProducts()
  }

  public getProducts(){
    return this.productService.getProductList(this.currentPage, this.pageSize).subscribe({
      next: (data) => {
        this.products = data.content; 
        this.totalItems = data.totalItems; 
        this.totalPages = data.totalPages; 
      },
      error: (err) => console.error('Error loading products:', err)
    });
  }

  public onPageChange(page: number) : void{
    this.currentPage = page;
    if (this.searchTerm.trim()) { // Perform search only if input is not empty or just spaces
      this.searchProducts(); // Maintain search during pagination
    } 
    else {
      this.getProducts();
    }
  }

  public updateProduct(id: number){
    this.router.navigate(['/product-update', id]);
  }

  public productDetails(id: number) {
    this.router.navigate(['/product-details', id]);
  }

  public deleteProduct(id: number) {
    const confirmed = confirm('Are you sure you want to delete this product?');
    if (confirmed) {
      this.productService.deleteProduct(id).subscribe({
        next: () => {
          this.getProducts(); 
        },
        error: (err) => {
          console.error('Delete failed:', err);
          alert(err instanceof Error ? err.message : 'Failed to delete product');
        }
      });
    }
  }

  public searchProducts(){
    if (this.searchTerm.trim()){ // Perform search only if input is not empty or just spaces
      this.productService.searchProducts(this.searchTerm, this.currentPage, this.pageSize)
        .subscribe({
            next: (data) => {
              this.products = data.content;
              this.totalItems = data.totalItems;
              this.totalPages = data.totalPages; 
            },
            error: (err) => console.error('Search failed:', err)
        });
    }
    else{
      this.getProducts();
    }
  }
}
