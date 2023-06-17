import { Component } from '@angular/core';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
 constructor(private cartService:CartService){}
 items =this.cartService.getItems();
//  cart=[];
 tongtien(){
  let tt:number=0;
  this.items.forEach(items =>tt +=items.soluong*items.giasp);
  return tt;
 }
 tongsoluong(){
  let tsl:number=0;
  this.items.forEach(items =>tsl +=items.soluong);
  return tsl;
 }
 

//  removeAll() {
//   for (let items of this.cart) {
//     this.cartService.removeItem(items);
//   }
//   this.cart = [];
// }
}
