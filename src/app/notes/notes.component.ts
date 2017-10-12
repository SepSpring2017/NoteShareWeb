import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { DocumentService, Document, UploadModel } from '../_services/document.service';
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
  @ViewChild('fileInput') fileInput;
  notes: Document[];
  apiUrl: string = environment.apiUrl;
  currentSubjectName: string;
  currentSubject: Subject;
  searchQuery: string;

  model: UploadModel = new UploadModel;

  constructor(
    private documentService: DocumentService,
    private activatedRoute: ActivatedRoute,
    private subjectService: SubjectService) {
  }

  modal() {
    $('.modal').modal();
    $('#addNoteModal').modal('open');
  }

  getAllNotes() {
    this.documentService.getAllDocuments().subscribe(res => this.notes = res);
  }

  addNote() {
    this.documentService.upload(this.model).subscribe((res: Response) => {
      this.getAllNotes();
      this.model = new UploadModel;
      $('#addNoteModal').modal('close'); 
    });
  }

  search() {
    if (!this.searchQuery)
      this.searchQuery = "";
    if (this.currentSubjectName && this.currentSubjectName != "All")
      this.searchBySubject();
    else
      this.documentService.searchDocuments(this.searchQuery).subscribe(res => this.notes = res);
  }

  searchBySubject() {
    if (!this.searchQuery)
      this.searchQuery = "";
    this.documentService.searchBySubject(this.searchQuery, this.currentSubjectName).subscribe(res => this.notes = res);
  }

  onChange(event: EventTarget) {
    let fileBrowser = this.fileInput.nativeElement;
    if (fileBrowser.files && fileBrowser.files[0]) {
      this.model.file = fileBrowser.files[0];
    }
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      let subjectId = params['subject'];
      if (subjectId) {
        this.subjectService.getSubject(subjectId).subscribe(res => { this.currentSubject = res, this.currentSubjectName = res.name, this.searchBySubject() });
      }
      else {
        this.currentSubjectName = "All"
        this.getAllNotes();
      }
    });
  }

}
