import { Injectable } from '@angular/core';
import { ISanpham } from './isanpham';
import { ICart } from './icart';
import { HttpClient } from '@angular/common/http';
@Injectable({ providedIn: 'root' })
export class CartService {
  constructor(private h: HttpClient) { }
  items: ICart[] = [];
  addToCart(sp: ISanpham) {
    var index = this.items.findIndex(item => item.idsp == sp.id);
    if (index >= 0) {
      this.items[index].soluong++;

    } else {
      var c: ICart;
      c = {
        idsp: sp.id,
        tensp: sp.tensp,
        giasp: sp.giasp,
        hinh: sp.hinh,
        soluong: 1
      }
      this.items.push(c);
    }
  }
  getItems() { return this.items; }
  clearCart() { this.items = []; return this.items; }
  // cart.service.ts
  taoDonHang(hoten:string, diachi:string, dienthoai:string, email:string){
    return this.h.post("http://localhost:3000/donhang",
      {hoten:hoten, diachi:diachi, dienthoai:dienthoai, email:email },
      { observe: 'response' }
    )
}
//cart.service.ts
luuChiTietDonhang(idDH:number, item:ICart){
  return this.h.post<any>(
    "http://localhost:3000/donhangchitiet",
  {"iddh":idDH,"idsp":item.idsp,"tensp":item.tensp,"giasp":item.giasp,"soluong":item.soluong},
    { observe: 'response' }
  )
  } 
}
