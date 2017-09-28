import { Component, OnInit } from '@angular/core';
import { DocumentService, Document } from '../_services/document.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  notes: Document[];

  constructor(private documentService: DocumentService) {
    this.getAllNotes();
  }

  getAllNotes() {
    this.documentService.getAllDocuments().subscribe(res => this.notes = res);
  }

  ngOnInit() {
  }

}
