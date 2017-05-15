import { Injectable } from '@angular/core';
import { NOTES } from '../NOTES';

@Injectable()
export class NotesService {


  getNotes(){
    return NOTES;
  }

  addNote( note ){
    NOTES.push( note );
  }

}
