import { Component, OnInit } from '@angular/core';
import { faGrinStars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-obrigado',
  templateUrl: './obrigado.component.html',
  styleUrls: ['./obrigado.component.scss']
})
export class ObrigadoComponent implements OnInit {

  faGrinStars = faGrinStars;

  constructor() { }

  ngOnInit(): void {
  }

}
