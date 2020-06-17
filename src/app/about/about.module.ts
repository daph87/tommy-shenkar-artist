import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { sharedModule } from '../global';
import { AboutComponent } from './about/about.component';
import { AboutRoutingModule } from './about-routing.module';



@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    sharedModule,
    AboutRoutingModule
  ]
})
export class AboutModule { }
