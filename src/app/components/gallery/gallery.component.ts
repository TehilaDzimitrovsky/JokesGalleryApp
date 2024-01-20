import { Component } from '@angular/core';
import { DataserviceService } from '../../services/dataservice.service';
import { Joke } from '../../models/joke';
import { MatDialog } from '@angular/material/dialog';
import { JokeDetailsComponent } from '../joke-details/joke-details.component';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
  jokes: Joke[] = [];

  constructor(private dataService: DataserviceService,
    private dialog: MatDialog) {}

  ngOnInit(): void {
    this.dataService.getJsonData().subscribe(data=>{
      this.jokes = data;
    });
  }

  openJokeDetails(joke:Joke)
  {
    this.dialog.open(JokeDetailsComponent, {
      width:"30vw",
      height: "80vh",
      data: joke
    });
  }
}
