import { NgModule } from '@angular/core';
import { RegpageComponent } from './regpage/regpage.component';
import { RouterModule, Routes } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';
import { LogpageComponent } from './logpage/logpage.component';
import { ArticlesComponent } from './articles/articles.component';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';
import { AllarticlesComponent } from './allarticles/allarticles.component';

const routes: Routes = [
  { path: 'reg', component: RegpageComponent },
  { path: 'art', component: ArticlesComponent },
  { path: 'articles', component: AllarticlesComponent },
  { path: 'log', component: LogpageComponent },
  { path: 'main', component: MainpageComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
