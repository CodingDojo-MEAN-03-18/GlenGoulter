import { Component, OnInit } from '@angular/core';
import { NoteService } from '../note.service';
import { Note } from '../note';
import { DatePipe } from '@angular/common';
//import { OrderByDatePipe } from '../pipes/order-by-date.pipe';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css'],
  //providers: [OrderByDatePipe] 
})
export class ReadComponent implements OnInit {
  notes: Note[]=[];

  constructor(private _noteService: NoteService) { }

  ngOnInit() {
    console.log('in read')
    this._noteService.noteObserver.subscribe(
      notes => {
        this.notes = notes,
        console.log('the notes in read comp ', this.notes)
      }
    );
    this._noteService.retrieveAll();
  }

}



