import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  statusBtnAddComputer = false;
  statusBtnAdminComputer = false;
  constructor() { }

  ngOnInit(): void {
  }

  clickAddComputer() {
    this.statusBtnAddComputer = true;
    this.statusBtnAdminComputer = false;
  }

  clickAdminComputer() {
    this.statusBtnAddComputer = false;
    this.statusBtnAdminComputer = true;
  }
}
