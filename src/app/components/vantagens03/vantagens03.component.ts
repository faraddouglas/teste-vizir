import { Component, OnInit } from '@angular/core';
import { TablePrice } from 'src/app/model/table-price';

@Component({
  selector: 'app-vantagens03',
  templateUrl: './vantagens03.component.html',
  styleUrls: ['./vantagens03.component.scss']
})
export class Vantagens03Component implements OnInit {

  tabelaPrecos: TablePrice[] = [
    { origem: '011', destino: '016', valMin: 1.90 },
    { origem: '016', destino: '011', valMin: 2.90 },
    { origem: '011', destino: '017', valMin: 1.70 },
    { origem: '017', destino: '011', valMin: 2.70 },
    { origem: '011', destino: '018', valMin: 0.90 },
    { origem: '017', destino: '011', valMin: 1.90 },
    { origem: 'Mesmo DDD', destino: 'Mesmo DDD', valMin: 1.00 }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
