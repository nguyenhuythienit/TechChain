import { Component } from '@angular/core';

import { DuLieuService } from '../du-lieu.service';
import { ISanpham } from '../isanpham';

import { CartService } from '../cart.service';
@Component({
  selector: 'app-san-pham-ban-chay',
  templateUrl: './san-pham-ban-chay.component.html',
  styleUrls: ['./san-pham-ban-chay.component.css']
})
export class SanPhamBanChayComponent {
  constructor(private d:DuLieuService, private cartservice: CartService) { }
 
 listSanPham:ISanpham[] = [];
  addToCart(product:ISanpham){
    this.cartservice.addToCart(product);
    console.log(this.cartservice.getItems());
    alert('Đã thêm vào giỏ hàng');
    
  }

  ngOnInit(): void {
    this.d.getLaptopBanChay().subscribe(d => this.listSanPham= d);
  }
}
