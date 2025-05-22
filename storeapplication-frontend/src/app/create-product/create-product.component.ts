import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { Product } from '../product';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent{

  product: Product = new Product();

  constructor(private productService: ProductService, private router: Router) {}

  public onSubmit(){
    this.productService.createProduct(this.product).subscribe({
        next: () => this.goToAllProducts(),
        error: (err) => console.error('Error creating product:', err)
      });
  }
  
  public goToAllProducts(){
    this.router.navigate(['/products']);
  }

  public backButton(){
    this.router.navigate(['/products']);
  }
}
