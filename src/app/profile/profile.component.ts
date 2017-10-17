import { Component, OnInit } from '@angular/core';
import { GravatarModule } from 'ng2-gravatar-directive';
import { UserService, User, Subject } from '../_services/user.service';
import { SubjectService } from '../_services/subject.service';
import { Document, DocumentService } from '../_services/document.service';

declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {

  user: User;
  subjects: Subject[];
  selectedSubject: Subject;
  documents: Document[];

  constructor(private userService: UserService, private subjectService: SubjectService, private documentService: DocumentService) {
    this.getCurrentUser();
    this.getSubjects();
    this.selectedSubject = this.subjects[0];
  }

  addSubject() {
    if (!this.user.subjects)
      this.user.subjects = new Array<Subject>();
    this.userService.addSubject(this.selectedSubject.subjectId).subscribe(
      res => {
        this.user = res.json();
        this.selectedSubject = this.subjects[0];
        $('#addSubjectModal').modal('close'); 
      });
  }

  deleteNote(note) {
    this.documentService.deleteDocument(note.id).subscribe(res => this.getCurrentUser());
  }

  modal() {
    $('.modal').modal();
    $('#addSubjectModal').modal('open'); 
  }

  selected(e) {
    this.selectedSubject = e;
  }

  getCurrentUser() {
    this.userService.getCurrentUser().subscribe(res => this.user = res );
  }

  getSubjects() {
    if (localStorage.getItem('allSubjects'))
      this.subjects = JSON.parse(localStorage.getItem('allSubjects'));
    else
      this.subjectService.getAllSubjects().subscribe(res => this.subjects = res);
    
  }

  ngOnInit() {
  }

}
