import { Component, OnInit } from '@angular/core';
import { Computer } from 'src/app/models/computer';
import {faSpinner} from '@fortawesome/free-solid-svg-icons/faSpinner';
import { ActivatedRoute, Router } from '@angular/router';
import { ComputerService } from 'src/app/services/computer.service';
import { MarqueComputer } from 'src/app/models/marque-computer';

@Component({
  selector: 'app-edit-computer',
  templateUrl: './edit-computer.component.html',
  styleUrls: ['./edit-computer.component.css']
})
export class EditComputerComponent implements OnInit {
  isLoading: boolean;
  id: number;
  faSpinner = faSpinner;
  editComputerForm: Computer;
  marqueDisponible: MarqueComputer[];
  typeDisponible: string[];
  categoryDisponible: string[];
  constructor(private route: ActivatedRoute, private computerService: ComputerService, private router: Router) { }

  ngOnInit() {
    this.marqueDisponible = this.computerService.marqueDisponible;
    this.typeDisponible = this.computerService.typeDisponible;
    this.categoryDisponible = this.computerService.categoryDisponible;
    // tslint:disable-next-line: radix
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.isLoading = true;
    this.computerService.getComputerById(+this.route.snapshot.paramMap.get('id')).subscribe((data: Computer) => {
      this.editComputerForm = data;
      this.isLoading = false;
    });
  }

  validationEditForm() {
    this.computerService.editComputer(this.editComputerForm).subscribe((data: Computer) => this.router.navigate(['/home']));
  }

}
