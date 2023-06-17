import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DuLieuService } from '../du-lieu.service';
import { ISanpham } from '../isanpham';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-san-pham-theo-loai',
  templateUrl: './san-pham-theo-loai.component.html',
  styleUrls: ['./san-pham-theo-loai.component.css']
})
export class SanPhamTheoLoaiComponent {
  listSanPham:ISanpham[]=[]; 
  tenLoai:string=""; 
  idLoai:number=0;  
  pageNum:number=1;
  pageSize:number=2;
  total: number = 0;  
  constructor( 
     private d:DuLieuService,
     private cartservice: CartService, 
     private route:ActivatedRoute
  ) { }

  addToCart(product:ISanpham){
    this.cartservice.addToCart(product);
    console.log(this.cartservice.getItems());
    alert('Đã thêm vào giỏ hàng');
    
  }

  ngOnInit(): void {
    this.idLoai = Number( this.route.snapshot.params['id'] );
    this.d.getTenLoaiSanPham(this.idLoai).subscribe ( 
      loai =>  { this.tenLoai= loai[0].tenLoai; }    
    );
    this.d.getSanPhamTheoLoai(this.idLoai, this.pageSize,this.pageNum ).subscribe ( 
      res => {
        this.listSanPham  = res.body ;
        this.total = Number(res.headers.get('X-Total-Count'));
      } 
    );
  }

  chuyenDenTrang( p: number){
    this.pageNum = p;
     this.d.getSanPhamTheoLoai(this.idLoai, this.pageSize, this.pageNum).subscribe ( 
      res => {
        this.listSanPham  = res.body ;
        this.total = Number(res.headers.get('X-Total-Count'));
      }
     );
}}
