import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-danhsachsanpham',
  templateUrl: './danhsachsanpham.component.html',
  styleUrls: ['./danhsachsanpham.component.css']
})
export class DanhsachsanphamComponent {
  listSP:any;
  constructor( private h: HttpClient ){
    var url= "http://localhost:3000/sanpham";
    this.h.get(url,  {observe: 'response'}
    ).subscribe(
        res => { 
          console.log("ok=", res.ok);
          console.log("body=", res.body);
          console.log("res=", res);
          console.log("Content-Type=", res.headers.get('Content-Type'));
          this.listSP= res.body; 
        }
    )
  }
}
