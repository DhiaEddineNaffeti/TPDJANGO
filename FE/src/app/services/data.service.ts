import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tutorial } from '../models/tutorial';  // Correct the path if needed

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'http://localhost:8000/api/tutorials'; // Adjust your backend URL

  constructor(private http: HttpClient) { }

  // Fetch all tutorials
  getAllTutorials(): Observable<Tutorial[]> {
    return this.http.get<Tutorial[]>(this.apiUrl);
  }

  // Fetch a single tutorial by id
  getTutorial(id: number): Observable<Tutorial> {
    return this.http.get<Tutorial>(`${this.apiUrl}/${id}`);
  }

  // Delete a tutorial
  deleteTutorial(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  // Add a new tutorial
  createTutorial(tutorial: Tutorial): Observable<Tutorial> {
    return this.http.post<Tutorial>(this.apiUrl, tutorial);
  }

  // Update an existing tutorial
  updateTutorial(id: number, tutorial: Tutorial): Observable<Tutorial> {
    return this.http.put<Tutorial>(`${this.apiUrl}/${id}`, tutorial);
  }
}
