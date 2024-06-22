import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiURL= "http://localhost:3000"

  constructor(private http: HttpClient) { }

  //CRUD Operation

  //1. Get All ProductService(Read all) linked to the list component

  getAll(): Observable<Product[]>{
    return this.http.get<Product[]>(`${this.apiURL}/products`)
  }

  

  //2. delete the product linked to the list component

  delete(id: number): Observable<Product> {
    return this.http.delete<Product>(`${this.apiURL}/products/${id}`)

  }

  //3. Now we will perfrom insert operation which is linked to the add component

  httpOptions ={
    headers : new HttpHeaders({
      'content-Type' : 'application/json'
    })
  }

  insert(product: Product): Observable<Product>{
    return this.http.post<Product>(`${this.apiURL}/products`,JSON.stringify(product),this.httpOptions)
  }

  // 4. View the product details link with view component

  getOne(id: number): Observable<Product>{
    return this.http.get<Product>(`${this.apiURL}/products/${id}`)

  }

  //5. Update the product link with update component

  update(id: number, product: Product): Observable<Product>{
    return this.http.put<Product>(`${this.apiURL}/products/${id}`,JSON.stringify(product), this.httpOptions)
  }

  

}


