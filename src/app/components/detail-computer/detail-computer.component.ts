import { Component, OnInit } from '@angular/core';
import {faSpinner} from '@fortawesome/free-solid-svg-icons/faSpinner';
import { Computer } from 'src/app/models/computer';
import { ActivatedRoute, Router } from '@angular/router';
import { ComputerService } from 'src/app/services/computer.service';

@Component({
  selector: 'app-detail-computer',
  templateUrl: './detail-computer.component.html',
  styleUrls: ['./detail-computer.component.css']
})
export class DetailComputerComponent implements OnInit {
  faSpinner = faSpinner;
  isLoading: boolean;
  id: number;
  infoComputer: Computer;

  constructor(private route: ActivatedRoute, private computerService: ComputerService, private router: Router) { }

  ngOnInit(): void {
    // tslint:disable-next-line: radix
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.isLoading = true;
    this.computerService.getComputerById(+this.route.snapshot.paramMap.get('id')).subscribe((data: Computer) => {
      this.infoComputer = data;
      this.isLoading = false;
    });
  }

}
