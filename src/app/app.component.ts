import { Component } from '@angular/core';
import { User } from './user';
import { NotesService } from './_services/notes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [NotesService]
})
export class AppComponent {

  title = 'app works!';
  notes = this.ns.getNotes();
  constructor(
    private ns:NotesService
  ){}

  // num:number = 5;
  // bool:boolean = true;
  // str:string = 'String';
  // arr:string[] = ['str1', 'str2'];
  // x:any = 'STRING';
  
  // bob:User = {
  //   id: 111,
  //   name: "Bob"
  // }

  // users:User[] = [
  //   {
  //     id: 111,
  //     name: "Bob"
  //   },
  //   {
  //     id: 222,
  //     name: "Jack"
  //   }
  // ]

  addNote( newNote ){
    let note = {
      text: newNote.value,
      color: 'red'
    }
    this.ns.addNote( note );
    newNote.value = '';
  }
  
}
