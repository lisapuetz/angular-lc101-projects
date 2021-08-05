import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fave-links',
  templateUrl: './fave-links.component.html',
  styleUrls: ['./fave-links.component.css']
})
export class FaveLinksComponent implements OnInit {
  faveLinks = ['https://education.launchcode.org/js-independent-track/chapters/angular-lsn1/exercises.html', 'https://google.com'];
  constructor() { }

  ngOnInit() {
  }

}
