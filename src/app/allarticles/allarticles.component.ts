import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-allarticles',
  templateUrl: './allarticles.component.html',
  styleUrls: ['./allarticles.component.css']
})
export class AllarticlesComponent implements OnInit {
  articles: Array<string>;

  ngOnInit() { 
    this.articles = localStorage.getItem('articles').split('|')
  }

  

}
