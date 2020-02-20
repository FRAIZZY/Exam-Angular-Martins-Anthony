import { Component, OnInit } from '@angular/core';
import { faLaptop } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  faLaptop = faLaptop;
  faUser = faUser;
  constructor() { }

  ngOnInit(): void {
  }

}
