import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
   // templateUrl: './about.component.html',
  template: `<div class="container">
            <div>
              <h2 class="left-align">About</h2>
            </div>
          <p class="flow-text">
            NoteShare is a site where you can upload your own notes (lecture notes, quiz answers, etc.) and share it with
            other members.
          </p>
</div>
`,
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
