import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { AdminComponent } from './components/admin/admin.component';
import { AddComputerComponent } from './components/add-computer/add-computer.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AdminComputerComponent } from './components/admin-computer/admin-computer.component';
import { EditComputerComponent } from './components/edit-computer/edit-computer.component';
import { DetailComputerComponent } from './components/detail-computer/detail-computer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    AdminComponent,
    AddComputerComponent,
    AdminComputerComponent,
    EditComputerComponent,
    DetailComputerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
