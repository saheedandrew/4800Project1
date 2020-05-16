import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CardsComponent } from './components/cards/cards.component';
import { HttpClientModule } from "@angular/common/http"

import { apiService} from './api.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {MatCardModule, MatToolbarModule,MatButtonModule,MatInputModule, MatIconModule} from '@angular/material';
import { FormsModule } from '@angular/forms';







@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    MatIconModule



  ],
  providers: [apiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
