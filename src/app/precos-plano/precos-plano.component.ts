import { Component, Input, OnInit } from '@angular/core';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-precos-plano',
  templateUrl: './precos-plano.component.html',
  styleUrls: ['./precos-plano.component.scss']
})
export class PrecosPlanoComponent implements OnInit {

  @Input() img: string = '';
  @Input() tipoPlano: string = '';
  @Input() valor: string = '';
  @Input() vantagem01: string = '';
  @Input() vantagem02: string = '';
  @Input() vantagem03: string = '';

  faCheck = faCheck;

  constructor() { }

  ngOnInit(): void {
  }

}
