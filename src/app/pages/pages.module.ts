import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { RoutingModule } from './routing.module';
import { SharedModule } from '../shared/shared.module';

// Pages
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HomeComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    RoutingModule,
    SharedModule,
    RouterModule
  ]
})
export class PagesModule { }
