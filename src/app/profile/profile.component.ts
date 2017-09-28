import { Component, OnInit } from '@angular/core';
import { GravatarModule } from 'ng2-gravatar-directive';
import { UserService, User, Subject } from '../_services/user.service';
import { SubjectService } from '../_services/subject.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {

  user: User;
  subjects: Subject[];
  selectedSubject: Subject;

  constructor(private userService: UserService, private subjectService: SubjectService) {
    this.getCurrentUser();
    this.getSubjects();
  }

  addSubject() {
    console.log(this.selectedSubject);
    if (!this.user.subjects)
      this.user.subjects = new Array<Subject>();
    this.user.subjects.push(this.selectedSubject);
    this.userService.addSubject(this.selectedSubject.subjectId).subscribe(res => console.log(res));

    this.getCurrentUser();
  }

  onChange(e) {
    console.log(e);
    console.log(this.selectedSubject);
  }

  getCurrentUser() {
    this.userService.getCurrentUser().subscribe(res => this.user = res);
  }

  getSubjects() {
    if (localStorage.getItem('allSubjects'))
      this.subjects = JSON.parse(localStorage.getItem('allSubjects'));
    else
      this.subjectService.getAllSubjects().subscribe(res => this.subjects = res);
    
    this.selectedSubject = this.subjects[0];
  }

  ngOnInit() {
  }

}
