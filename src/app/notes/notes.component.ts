import { Component, OnInit } from '@angular/core';
import { DocumentService, Document } from '../_services/document.service';
import { environment } from '../../environments/environment';

declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  notes: Document[];
  apiUrl: string = environment.apiUrl;

  constructor(private documentService: DocumentService) {
    this.getAllNotes();
  }
  
  modal() {
    $('.modal').modal();
    $('#addNoteModal').modal('open'); 
  }

  getAllNotes() {
    this.documentService.getAllDocuments().subscribe(res => this.notes = res);
  }

  ngOnInit() {
  }

}
