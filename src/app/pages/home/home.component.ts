import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  productList: any[] = [];
  cartObj: any = {
    "CartId": 0,
    "CustId": 1,
    "ProductId": 0,
    "Quantity": 0,
    "AddedDate": "2023-08-15T07:39:22.206Z"
  }
  
  constructor(private productService: ProductService) {
    this.loadAllProduct();

  }
  ngOnInit(): void {
    debugger;
    this.loadAllProduct();
  }
  loadAllProduct() {
    debugger;
    this.productService.getAllProducts().subscribe((result: any) => {
      this.productList = result.data;
    })
  }
  addItemToCart(productId: number){
    debugger;
    this.cartObj.ProductId = productId;
    this.productService.addToCart(this.cartObj).subscribe((result: any)=>{
      if(result.result){
        alert("Product Added To cart");
        this.productService.cartAddedSubject.next(true);
      }
    })
  }
}
