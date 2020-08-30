import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputModule } from 'src/input/input.module';
import { HomeComponent } from './home/home.component';

import { HttpClientModule } from '@angular/common/http';
import { BirdListComponent } from './bird-list/bird-list.component';

import { OneBirdComponent } from './one-bird/one-bird.component';
import { RegisterComponent } from './register/register.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AddBirdComponent } from './add-bird/add-bird.component';
import { AddSpotComponent } from './add-spot/add-spot.component';
import { AddAreaComponent } from './add-area/add-area.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    NavbarComponent,
    LoginComponent,
    HomeComponent,
    BirdListComponent,
    OneBirdComponent,
    RegisterComponent,
    SidebarComponent,
    AddBirdComponent,
    AddSpotComponent,
    AddAreaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    InputModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
