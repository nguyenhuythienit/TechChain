import { Component } from '@angular/core';

import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr, 'fr');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'duandulich';
  tensach ="Nói với tuổi 20"; //khai báo biến string
    giasach = 25000;   //khai báo biến số
    phai = true;
    thu = ['Thứ 2','Thứ 3','Thứ 4','Thứ 5','Thứ 6','Thứ 7','Chủ nhật'];
    sinhvien = {       //khai báo biến kiểu object
      hoten:'Mai Anh Tới', 
      ngaysinh:'2004-3-24',
    } 
    tinhTuoi(){ //định nghĩa 1 hàm 
     var ns:Date = new Date(this.sinhvien.ngaysinh);
     return new Date().getFullYear() - ns.getFullYear();   
    }
}
