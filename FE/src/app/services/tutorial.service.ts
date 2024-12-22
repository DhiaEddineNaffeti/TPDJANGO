import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Define the Tutorial model interface
export interface Tutorial {
  id?: number;
  title: string;
  description: string;
  published: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TutorialService {
  private apiUrl = 'http://localhost:8001/api/tutorials';  // Your Django API endpoint

  constructor(private http: HttpClient) {}

  // Get all tutorials
  getAllTutorials(): Observable<Tutorial[]> {
    return this.http.get<Tutorial[]>(this.apiUrl);
  }

  // Get tutorial by id
  getTutorial(id: number): Observable<Tutorial> {
    return this.http.get<Tutorial>(`${this.apiUrl}/${id}`);
  }

  // Create a new tutorial
  createTutorial(tutorial: Tutorial): Observable<Tutorial> {
    return this.http.post<Tutorial>(this.apiUrl, tutorial);
  }

  // Update a tutorial
  updateTutorial(id: number, tutorial: Tutorial): Observable<Tutorial> {
    return this.http.put<Tutorial>(`${this.apiUrl}/${id}`, tutorial);
  }

  // Delete a tutorial
  deleteTutorial(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
