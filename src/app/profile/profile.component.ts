import { Component, OnInit } from '@angular/core';
import { GravatarModule } from 'ng2-gravatar-directive';
import { UserService, User, Subject } from '../_services/user.service';
import { SubjectService } from '../_services/subject.service';
import { Document } from '../_services/document.service';

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
  selectedSubject: number;
  documents: Document[];

  constructor(private userService: UserService, private subjectService: SubjectService) {
    $('.modal').modal();
    this.getCurrentUser();
  }

  addSubject() {
    console.log(this.selectedSubject);
    if (!this.user.subjects)
      this.user.subjects = new Array<Subject>();
    this.userService.addSubject(this.selectedSubject).subscribe(
      res => {
        this.user = res.json();
        this.selectedSubject = null;
        $('#addSubjectModal').modal('close'); 
      });
  }

  modal() {
    $('.modal').modal();
    $('#addSubjectModal').modal('open'); 
  }
  
  selected(e) {
    this.selectedSubject = e;
  }

  getCurrentUser() {
    this.userService.getCurrentUser().subscribe(res => this.user = res);
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
