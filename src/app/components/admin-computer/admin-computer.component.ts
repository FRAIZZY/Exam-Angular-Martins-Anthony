import { Component, OnInit } from '@angular/core';
import {faSpinner} from '@fortawesome/free-solid-svg-icons/faSpinner';
import { Computer } from 'src/app/models/computer';
import { ComputerService } from 'src/app/services/computer.service';
import {faPen} from '@fortawesome/free-solid-svg-icons/';
import {faTrash} from '@fortawesome/free-solid-svg-icons/';

@Component({
  selector: 'app-admin-computer',
  templateUrl: './admin-computer.component.html',
  styleUrls: ['./admin-computer.component.css']
})
export class AdminComputerComponent implements OnInit {
  faSpinner = faSpinner;
  faPen = faPen;
  faTrash = faTrash;
  isLoading: boolean;
  computers: Computer[];
  constructor(private computerService: ComputerService) { }

  ngOnInit() {
    this.isLoading = true;
    return this.computerService.getAllComputer().subscribe((data: Computer []) => {
      this.computers = data;
      this.isLoading = false;
    });
  }

  deleteArticle(id: number) {
    this.computerService.deleteComputer(id).subscribe((data: Computer) => {
      this.computerService.getAllComputer().subscribe((result: Computer[] ) => {
        this.computers = result;
      });
    });
  }
}
