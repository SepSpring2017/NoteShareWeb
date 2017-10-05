import { Router, ActivatedRoute, Params} from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DocumentService, Document } from '../_services/document.service';
import { environment } from '../../environments/environment';
import { Subject } from '../_services/user.service';
import { SubjectService } from '../_services/subject.service';

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
  currentSubjectName: string;
  currentSubject: Subject;

  constructor(
    private documentService: DocumentService,
    private activatedRoute: ActivatedRoute,
    private subjectService: SubjectService) {
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
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      let subjectId = params['subject'];
      if (subjectId) {
        this.subjectService.getSubject(subjectId).subscribe(res => { this.currentSubject = res, this.currentSubjectName = res.name });
      }
      else {
        this.currentSubjectName = "All"
      }
    });
  }

}
