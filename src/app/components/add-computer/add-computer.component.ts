import { Component, OnInit } from '@angular/core';
import { Computer } from 'src/app/models/computer';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { ComputerService } from 'src/app/services/computer.service';
import { MarqueComputer } from 'src/app/models/marque-computer';
import {faSpinner} from '@fortawesome/free-solid-svg-icons/faSpinner';

@Component({
  selector: 'app-add-computer',
  templateUrl: './add-computer.component.html',
  styleUrls: ['./add-computer.component.css']
})
export class AddComputerComponent implements OnInit {
  faSpinner = faSpinner;
  computer: Computer;
  marqueDisponible: MarqueComputer[];
  typeDisponible: string[];
  categoryDisponible: string[];
  constructor(private router: Router, private computerService: ComputerService) { }

  ngOnInit(): void {
    this.computer = new Computer();
    this.marqueDisponible = this.computerService.marqueDisponible;
    this.typeDisponible = this.computerService.typeDisponible;
    this.categoryDisponible = this.computerService.categoryDisponible;
  }

  ValidationComputerForm() {
    this.computer.dateEntreeStock = new Date();
    this.computerService.addComputer(this.computer).subscribe( data => {
    this.router.navigate(['/home']);
    });
  }
}
