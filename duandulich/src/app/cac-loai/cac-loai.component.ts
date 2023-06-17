import { Component } from '@angular/core';

import { DuLieuService } from '../du-lieu.service';
import { ILoaisp } from '../iloaisp'
@Component({
  selector: 'app-cac-loai',
  templateUrl: './cac-loai.component.html',
  styleUrls: ['./cac-loai.component.css']
})
export class CacLoaiComponent {
  constructor(private d:DuLieuService) { }
  listLoaiSP:ILoaisp[] = [];
  ngOnInit(): void {
    this.d.getListLoaiSP().subscribe( d => this.listLoaiSP = d);
  }
}
