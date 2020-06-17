import { NgModule } from '@angular/core';
import { sharedModule } from '../global';
import { ContactComponent } from './contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactRoutingModule } from './contact-routing.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    sharedModule,
    ReactiveFormsModule,
    ContactRoutingModule, 
    HttpClientModule
  ]
})
export class ContactModule { }
