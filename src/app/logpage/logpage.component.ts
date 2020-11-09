import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logpage',
  templateUrl: './logpage.component.html',
  styleUrls: ['./logpage.component.css']
})
export class LogpageComponent implements OnInit {
  ngOnInit(): void { }
  mail: string;
  pass: string;
  correct: string;
  
  logUser() {
    if (localStorage.getItem(this.mail) == this.pass) {
      localStorage.setItem('logIn', 'true')
    } else {
      localStorage.setItem('logIn', 'false')
    } if (localStorage.getItem('logIn') == 'false') {
      this.correct = 'invalid pass/mail'
    } else {
      this.correct = 'Вход успешен'
    }
  }
}
