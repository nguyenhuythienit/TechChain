import { Component } from '@angular/core';
import { DuLieuService } from '../du-lieu.service';
import { ISanpham } from '../isanpham';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-san-pham-chi-tiet',
  templateUrl: './san-pham-chi-tiet.component.html',
  styleUrls: ['./san-pham-chi-tiet.component.css']
})
export class SanPhamChiTietComponent {
  constructor( 
    private d:DuLieuService,
    private cartservice: CartService,  
    private route:ActivatedRoute 
  ) { }

  listSanPham:ISanpham[] = [];


 spChiTiet:ISanpham={
   id:0, tensp:"", giasp:0, 
   solanxem:0, hinh:"", 
   mota:"", hot:0, ngay:"", idLoai:0
 }; 


 idSP:number=0;  
 idLoai:number=0;
 tenLoai:string="";
 


 addToCart(product:ISanpham){
   this.cartservice.addToCart(product);
   console.log(this.cartservice.getItems());
   alert('Đã thêm vào giỏ hàng');
   
 }

 ngOnInit(): void {
   this.idSP = Number(this.route.snapshot.params['id']);    
   this.d.getSanPhamChiTiet(this.idSP).subscribe ( 
     res => { 
       this.spChiTiet  = res[0];
       this.idLoai = this.spChiTiet.idLoai;
       this.d.getTenLoaiSanPham(this.idLoai).subscribe(
         d => this.tenLoai = d[0]['tenLoai']
       );
     }//res
   );
 }
}
