import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit {

  //here declaring local observable <Product[]>
  products$: Observable<Product[]> = new Observable<Product[]>;

  constructor(private ps: ProductService, private router: Router) { }

  ngOnInit() {

    this.products$ = this.ps.getAll();

  }

  //delete product from the list

  deleteProduct(id: number) {
    this.ps.delete(id).subscribe(data => {
      this.products$ = this.ps.getAll();
      this.router.navigate(['/produts'])
    }
    )
  }
}
