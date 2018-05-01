import { Component, OnInit } from '@angular/core';
import { NoteService } from '../note.service';
import { Note } from '../note';
import { NgForm } from '@angular/forms/src/directives/ng_form';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  note: Note = new Note();
  constructor(private _noteService: NoteService) { }

  ngOnInit() {
  }
  
  onSubmit(formData:NgForm){
    event.preventDefault();
    const {value, valid} = formData;
    console.log('create component', this.note);
    this._noteService.createNote(this.note);
    this.note = new Note();
    formData.reset();
  }



}
