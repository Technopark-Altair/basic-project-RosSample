import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { RegpageComponent } from './regpage/regpage.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { LogpageComponent } from './logpage/logpage.component';
import { AppRouting1Module } from './mainpage/app-routing1.module';
import { ArticlesComponent } from './articles/articles.component';
import { AllarticlesComponent } from './allarticles/allarticles.component';

@NgModule({
  declarations: [
    AppComponent,
    RegpageComponent,
    MainpageComponent,
    LogpageComponent,
    ArticlesComponent,
    AllarticlesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    AppRouting1Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
