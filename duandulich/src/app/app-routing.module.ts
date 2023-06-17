import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ChitietsanphamComponent } from './chitietsanpham/chitietsanpham.component';
import { DangkyComponent } from './dangky/dangky.component';
import { DangnhapComponent } from './dangnhap/dangnhap.component';
import { DanhsachsanphamComponent } from './danhsachsanpham/danhsachsanpham.component';
import { GiohangComponent } from './giohang/giohang.component';
import { HomeComponent } from './home/home.component';
import { LienheComponent } from './lienhe/lienhe.component';
import { SanPhamChiTietComponent } from './san-pham-chi-tiet/san-pham-chi-tiet.component';
import { SanPhamTheoLoaiComponent } from './san-pham-theo-loai/san-pham-theo-loai.component';
import { ThanhToanComponent } from './thanh-toan/thanh-toan.component';

const routes: Routes = [
  { path:'', component:HomeComponent},
  { path:'home', component:HomeComponent},
  { path:'sanpham', component:DanhsachsanphamComponent},
  { path:'cart', component:CartComponent},
  { path:'giohang', component:GiohangComponent},
  { path:'thanhtoan', component:ThanhToanComponent},
  { path:'sp/:id', component:SanPhamChiTietComponent},
  { path:'sanpham/:id', component:ChitietsanphamComponent},
  { path:'dangky', component:DangkyComponent},
  { path:'dangnhap', component:DangnhapComponent},
  { path:'lienhe', component:LienheComponent},
  { path:'loai/:id', component:SanPhamTheoLoaiComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
