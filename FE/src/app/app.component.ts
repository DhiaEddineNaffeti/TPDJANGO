import { Component, OnInit } from '@angular/core';
import { Tutorial } from './models/tutorial';  // Ensure the path is correct
import { DataService } from './services/data.service';  // Ensure the path is correct

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular 17 CRUD example';
  tutorials: Tutorial[] = [];
  currentTutorial: Tutorial | null = null;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.retrieveTutorials();
  }

  retrieveTutorials(): void {
    this.dataService.getAllTutorials().subscribe(
      (data: Tutorial[]) => {
        this.tutorials = data;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  selectTutorial(tutorial: Tutorial): void {
    this.currentTutorial = tutorial;
  }

  deleteTutorial(id: number): void {  // Changed to number since id is always a number now
    if (id) {  // Check that id is truthy
      this.dataService.deleteTutorial(id).subscribe(
        () => {
          console.log(`Deleted tutorial with id: ${id}`);
          this.retrieveTutorials(); // Refresh the tutorial list after deletion
        },
        (error: any) => {
          console.error('Error deleting tutorial:', error);
        }
      );
    } else {
      console.error('Tutorial ID is invalid');
    }
  }
}
