import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { environment } from "../environments/environment";
import { NavbarComponent } from './navbar/navbar.component';
import { HeroComponent } from './hero/hero.component';
import { FooterComponent } from './footer/footer.component';
import { HomePageComponent } from './home-page/home-page.component';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { TravelsPageComponent } from './travels-page/travels-page.component';
import { TravelsListComponent } from './travels-list/travels-list.component';
import { TravelsService } from "./shared/travels.service";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroComponent,
    FooterComponent,
    HomePageComponent,
    BlogPageComponent,
    TravelsPageComponent,
    TravelsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [TravelsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
