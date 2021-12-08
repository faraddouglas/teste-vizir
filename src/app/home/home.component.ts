import { Component, OnInit } from '@angular/core';
import { faMapMarker } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  faMapMarker = faMapMarker;

  constructor() { }

  ngOnInit(): void {
  }

}
