import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

export const server = 'http://localhost:8080';
@NgModule({
    imports:[
        RouterModule,
        CommonModule 
    ],
    exports:[
        RouterModule,
        CommonModule  
    ]

})
export class sharedModule{};