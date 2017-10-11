import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { DocumentService, Document } from '../_services/document.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  notes: Document[];
  @ViewChild('searchNote') searchNote;

  constructor(private documentService: DocumentService,
  ) { }

  searchNotes(search) {
    this.documentService.getDocument(this.searchNote).subscribe(res => this.notes = res);
  }
  ngOnInit() {
  }

}
