import { Injectable } from '@angular/core';
import { MarqueComputer } from '../models/marque-computer';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import {catchError, retry} from 'rxjs/internal/operators';
import { Computer } from '../models/computer';

@Injectable({
  providedIn: 'root'
})
export class ComputerService {
  computers: Computer[];
  apiURL = 'http://localhost:3000/computers';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  marqueDisponible = [
    new MarqueComputer('Dell', 'logoDell'),
    new MarqueComputer('Hp', 'logoHp'),
    new MarqueComputer('Apple', 'logoApple'),
    new MarqueComputer('Asus', 'logoAsus'),
  ];
  typeDisponible = ['Portable', 'Fixe', 'Tablette hybride' ];
  categoryDisponible = ['Gaming', 'Bureautique', 'Premier Prix'];
  constructor(private httpClient: HttpClient) {
    this.computers = [];
  }
  // Afficher tous les ordinateurs
  getAllComputer(): Observable<Computer []> {
    return this.httpClient.get<Computer []>(this.apiURL).pipe(retry(1), catchError(this.handleError));
  }

  // Avoir l'ordinateur par ID
  getComputerById(id: number): Observable<Computer> {
    return this.httpClient.get<Computer>(this.apiURL + '/' + id).pipe(retry(1), catchError(this.handleError));
  }

  // Créer un ordinateur
  addComputer(computer: Computer): Observable<Computer> {
    return this.httpClient.post<Computer>(this.apiURL, computer).pipe(retry(1), catchError(this.handleError));
  }

  // Editer un ordinateur
  editComputer(computer: Computer): Observable<Computer> {
    return this.httpClient.put<Computer>(this.apiURL + '/' + computer.id, computer).pipe(retry(1), catchError(this.handleError));
  }

  // Suprimer un ordinateur
  deleteComputer(id: number): Observable<Computer> {
    return this.httpClient.delete<Computer>(this.apiURL + '/' + id).pipe(retry(1), catchError(this.handleError));
  }

  handleError(error) {
    let errorMessage = '';
    if ( error.error instanceof ErrorEvent ) {
    errorMessage = error.error.message;
    } else {
    errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
    }
}
