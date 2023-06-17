import { Component } from '@angular/core';
import { CartService } from '../cart.service';

import { DuLieuService } from '../du-lieu.service';
import { ISanpham } from '../isanpham';
@Component({
  selector: 'app-san-pham-moi',
  templateUrl: './san-pham-moi.component.html',
  styleUrls: ['./san-pham-moi.component.css']
})
export class SanPhamMoiComponent {
  constructor( private d:DuLieuService,private cartservice: CartService  ) { }
  listSanPham:ISanpham[] = [];

  addToCart(product:ISanpham){
    this.cartservice.addToCart(product);
    console.log(this.cartservice.getItems());
    alert('Đã thêm vào giỏ hàng');
    
  }
  ngOnInit(): void {
    this.d.getDienThoaiMoi().subscribe( d => this.listSanPham = d);
  }
}
