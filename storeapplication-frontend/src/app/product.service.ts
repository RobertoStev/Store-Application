import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private _url = "http://localhost:8080/products";
  
  constructor(private http: HttpClient) { }

  public getProductList(page: number = 0, size: number = 4) : Observable<any>{
    return this.http.get<any>(`${this._url}?page=${page}&size=${size}`);
  }

  public createProduct(product: Product) : Observable<Product>{
    return this.http.post<Product>(`${this._url}`, product);
  }

  public getProductById(id: number) : Observable<Product>{
    return this.http.get<Product>(`${this._url}/${id}`);
  }

  public updateProduct(id: number, product: Product) : Observable<Product>{
    return this.http.put<Product>(`${this._url}/${id}`, product);
  }

  public deleteProduct(id: number) : Observable<void>{
    return this.http.delete<void>(`${this._url}/${id}`).pipe(
    catchError(error => {
      console.error('Delete failed:', error);
      throw 'Error deleting product. Please try again.';
      })
    );
  }

  public searchProducts(name: string, page: number, size: number) : Observable<any>{
    return this.http.get<any>(`${this._url}/search`, {
      params: {
        name: name,
        page: page.toString(),
        size: size.toString()
      }
    });
  }
}
