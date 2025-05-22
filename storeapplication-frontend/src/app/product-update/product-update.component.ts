import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  id: number;
  product: Product;
  
  constructor(private productService: ProductService, private router: Router, 
    private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
    })

    this.productService.getProductById(this.id).subscribe(data => {
      this.product = data;
    })
  }

  public onSubmit(){
    this.productService.updateProduct(this.id, this.product).subscribe({
      next: () => this.goToAllProducts(),
      error: (err) => console.error('Error updating product:', err)
    })
  }

  public goToAllProducts(){
    this.router.navigate(['/products']);
  }

  public backButton(){
    this.router.navigate(['/products']);
  }

}
