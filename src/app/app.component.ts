import { Component, OnInit } from '@angular/core';
import { ProductService } from './services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'ecommerce';
  subTotal: number = 0;
  cartProducts: any[] = [];
  constructor(private productService: ProductService) {
    this.productService.cartAddedSubject.subscribe(res=> {
     this.loadCart();
    })
  }
  ngOnInit(): void{
    this.loadCart();
  }
  
    
  
  loadCart(){
    this.productService.getCartItemsByCustId(1).subscribe((res: any)=>{
    this.cartProducts = res.data;
    this.cartProducts.forEach(element => {
      this.subTotal = this.subTotal + element.productPrice;
    });
    })
  }
}
