import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  newProductName:string;
  newProductDescription:string;
  newProductQuantity:number;
  newProductCost:number;

  @Output()
  productAdded=new EventEmitter<{
    productName:string;
    productDescription:string;
    productQuantity:number;
    productCost:number;
  }>();

onAddProduct(){
  // console.log(this.newProductName);
  // console.log(this.newProductDescription);
  // console.log(this.newProductQuantity);
  // console.log(this.newProductCost);
  this.productAdded.emit({
    productName:this.newProductName,
    productDescription:this.newProductDescription,
    productQuantity:this.newProductQuantity,
    productCost:this.newProductCost,
  });
}

resetFields(){
  this.newProductName="";
  this.newProductDescription="";
  this.newProductQuantity=0;
  this.newProductCost=0;
}

}
