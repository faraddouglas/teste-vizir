import { Component, OnInit } from '@angular/core';
import { faMapMarkerAlt, faPlus, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-vantagens02',
  templateUrl: './vantagens02.component.html',
  styleUrls: ['./vantagens02.component.scss']
})
export class Vantagens02Component implements OnInit {

  faMapMarkerAlt = faMapMarkerAlt;
  faPlus = faPlus;
  faPhoneAlt = faPhoneAlt;

  constructor() { }

  ngOnInit(): void {
  }

}
