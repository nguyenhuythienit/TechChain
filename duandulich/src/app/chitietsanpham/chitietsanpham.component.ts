import { Component } from '@angular/core';
import { ISanpham } from '../isanpham';
import { DuLieuService } from '../du-lieu.service';

import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-chitietsanpham',
  templateUrl: './chitietsanpham.component.html',
  styleUrls: ['./chitietsanpham.component.css']
})
export class ChitietsanphamComponent {
  constructor( private d:DuLieuService ,private route:ActivatedRoute ){ }
  idSP:number=0;
  sp:any;
  // sp1 = <ISanpham>{};
  // sp2: ISanpham = {
  //   id:1, tensp:"Iphone 14", giasp:32000000, solanxem:420, 
  //   hot:1, mota:"", hinh:"", ngay:"", idLoai:1
  // }
  // listsp:ISanpham[] = [
  //   {id:1, tensp:"AA", giasp:11, solanxem:1, hot:1, mota:"", hinh:"", ngay:"", idLoai:1},
  //   {id:2, tensp:"BB", giasp:22, solanxem:1, hot:0, mota:"", hinh:"", ngay:"", idLoai:1},
  //   {id:3, tensp:"CC", giasp:33, solanxem:1, hot:1, mota:"", hinh:"", ngay:"", idLoai:1}
  // ];
  // ngOnInit(): void {
  //   this.idSP = Number( this.route.snapshot.params['id'] );    
  //   console.log("id = " , this.idSP)
  //   // this.sp1.tensp="Samsung Galaxy S8";
  //   // console.log("sp1:", this.sp1);
  //   // console.log("sp2:", this.sp2);
  // } //ngOnInit
  ngOnInit(): void {
    var id = Number(this.route.snapshot.params['id']);    
    this.d.laySP(id).subscribe ( 
      res => { this.sp= res; console.log(res);}
    )
  } //ngOnInit
}
