import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'tommyshenkar/home', loadChildren: "./home/home.module#HomeModule" },
  { path: 'tommyshenkar/portfolio', loadChildren: "./portfolio/portfolio.module#PortfolioModule" },
  { path: 'tommyshenkar/about', loadChildren: "./about/about.module#AboutModule" },
  { path: 'tommyshenkar/contact', loadChildren: "./contact/contact.module#ContactModule" },
  { path: "", redirectTo: "/tommyshenkar/home", pathMatch: "full" },
  { path: "**", redirectTo: "/tommyshenkar/home", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
