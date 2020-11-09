import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-regpage',
  templateUrl: './regpage.component.html',
  styleUrls: ['./regpage.component.css']
})
export class RegpageComponent implements OnInit {
  ngOnInit(): void { }
  mail: string;
  pass: string;
  addUser() {
    localStorage.setItem(this.mail, this.pass)
  }

}
