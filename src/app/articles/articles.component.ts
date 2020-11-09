import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  public article: object;
  event: string;
  date1: string;
  date2: string;
  text: string;
  str: string;
  logged: boolean;

  ngOnInit() {
    if (localStorage.getItem('logIn') == 'true') {
      this.logged = true;
    }
  }
  addText() {
    this.str = this.event + '|' + this.date1 + '|' + this.date2 + '|' + this.text + '|' + '-----' + '|' 
    localStorage.setItem('articles', localStorage.getItem('articles') + this.str)
  }
}