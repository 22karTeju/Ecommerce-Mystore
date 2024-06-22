import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from '../product';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent implements OnInit{

  constructor(private ps: ProductService, private route: ActivatedRoute,
                        private router: Router){}

  goBack(){
    this.router.navigate(['/products'])
  }

  product$!: Observable<Product>;
  prodId: number;



  ngOnInit() {
     this.prodId = this.route.snapshot.params['id']
     this.product$ = this.ps.getOne(this.prodId)
    
  }

}
