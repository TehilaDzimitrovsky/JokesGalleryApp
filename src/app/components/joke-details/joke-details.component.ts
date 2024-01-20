import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Joke } from '../../models/joke';
import { DataserviceService } from '../../services/dataservice.service';

@Component({
  selector: 'app-joke-details',
  templateUrl: './joke-details.component.html',
  styleUrl: './joke-details.component.css'
})
export class JokeDetailsComponent {
  jokeDetailsForm!: FormGroup;
  suggestedJokes: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: Joke, private fb: FormBuilder,
    private dialogRef: MatDialogRef<JokeDetailsComponent>, private dataService: DataserviceService, private dialog: MatDialog) {
      this.initForm();
  }

  private initForm(): void {
    // if edit is needed
    // this.jokeDetailsForm = this.fb.group({
    //   setup: [this.data.setup],
    //   delivery: [this.data.delivery],
    // });
    this.dataService.getJsonData().subscribe(res=>{
      this.suggestedJokes = this.dataService.getRandomJokesByType(this.data.type,res);
    })
   
  }

  closeDialog() {
    this.dialogRef.close();
  }

  openSuggestedJoke(joke: Joke)
  {
    this.dialogRef.close();
    this.dialog.open(JokeDetailsComponent, {
      width:"30vw",
      height: "80vh",
      data: joke
    });
  }
}
