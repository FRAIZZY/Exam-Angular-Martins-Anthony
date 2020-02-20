import { Component, OnInit } from '@angular/core';
import { ComputerService } from 'src/app/services/computer.service';
import {faSpinner} from '@fortawesome/free-solid-svg-icons/faSpinner';
import {faEye} from '@fortawesome/free-solid-svg-icons/';
import { Computer } from 'src/app/models/computer';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isLoading: boolean;
  faSpinner = faSpinner;
  faEye = faEye;
  computers: Computer[];
  constructor(private computerService: ComputerService) { }

  ngOnInit() {
    this.isLoading = true;
    return this.computerService.getAllComputer().subscribe((data: Computer []) => {
      this.computers = data;
      this.isLoading = false;
    });
  }

}
