import { Component } from '@angular/core';

@Component({
  selector: 'app-filpkart',
  templateUrl: './filpkart.component.html',
  styleUrls: ['./filpkart.component.css']
})
export class FilpkartComponent {
  public term:string="";
  public products:any= [
    {name:'pen', price: 50, rating: 5, freedelivery:true},
    {name:'smartphone', price: 25000, rating: 4.8, freedelivery:true},
    {name:'Iphone', price: 90000, rating: 5, freedelivery:false},
    {name:'shirt', price: 2700, rating: 4.6, freedelivery:true},
    {name:'shoes', price: 5000, rating: 4.3, freedelivery:false},
    {name:'smartwatch', price: 4500, rating: 4.2, freedelivery:true},
    {name:'laptop', price: 56000, rating: 4.0, freedelivery:false},
    {name:'Ipad', price: 45000, rating: 4.8, freedelivery:true},
    {name:'charger', price: 2500, rating: 4.4, freedelivery:true},
    {name:'powerbank', price: 6000, rating: 4.9, freedelivery:false}
  ]
  filter(){
    this.products=
    this.products.filter((product:any)=>product.name.includes(this.term));
  }
  ofd(){
  this.products=
  this.products.filter((product:any)=>product.freedelivery==false);
                                                          //  true
  }
  plh(){
    this.products=
    this.products.sort((a:any,b:any)=>a.price-b.price);
  }
  phl(){
    this.products=
    this.products.sort((a:any,b:any)=>b.price-a.price);
  }
  rlh(){
    this.products=
    this.products.sort((x:any,y:any)=>x.rating-y.rating);
  }
  rhl(){
    this.products=
    this.products.sort((x:any,y:any)=>y.rating-x.rating);
  }
  ads(){
    this.products= this.products.map((product:any)=>{
      // product.price=product.price-product.price*50/100;
      product.price=product.price/2;
      return product;
    })
  }
  pdc(){
    this.products=this.products.map((product:any)=>{
      product.price=product.price+50;
      return product;
    })
  }
  tp(){
    let total=this.products.reduce((sum:any,product:any)=>sum + product.price,0);
    alert(total);
  }
  tci(){
    let total=this.products.reduce((sum:any,product:any)=>sum+product.name,5);
    alert(total);
  }
  delete(i: number) {
    this.products.splice(i, 1);
  }
}
