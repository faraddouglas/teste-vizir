import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Origem, Destino, Tempo, Plano, Total } from 'src/app/model/dadosCalculo';
import { dados } from 'src/banco de dados/dados';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-calculo-home',
  templateUrl: './calculo-home.component.html',
  styleUrls: ['./calculo-home.component.scss']
})
export class CalculoHomeComponent implements OnInit {

  origens: Origem[] = [
    { nome: '011 - São Paulo', valor: '011' },
    { nome: '016 - Ribeirão Preto', valor: '016' },
    { nome: '017 - São José do Rio Preto', valor: '017' },
    { nome: '018 - Araçatuba', valor: '018' }
  ]

  destinos: Destino[] = [
    { nome: '011 - São Paulo', valor: '011' },
    { nome: '016 - Ribeirão Preto', valor: '016' },
    { nome: '017 - São José do Rio Preto', valor: '017' },
    { nome: '018 - Araçatuba', valor: '018' }
  ]

  tempos: Tempo[] = [
    { nome: '20 min', valor: 20 },
    { nome: '30 min', valor: 30 },
    { nome: '40 min', valor: 40 },
    { nome: '60 min', valor: 60 },
    { nome: '80 min', valor: 80 },
    { nome: '100 min', valor: 100 },
    { nome: '120 min', valor: 120 },
    { nome: '150 min', valor: 150 },
    { nome: '200 min', valor: 200 },
  ]

  planos: Plano[] = [
    { nome: 'FaleMais30', valor: 30 },
    { nome: 'FaleMais60', valor: 60 },
    { nome: 'FaleMais120', valor: 120 },
  ]

  total: Total = {
    totalSemPlano: 0,
    totalComPlano: 0,
    valorPlano: 0
  };


  form: FormGroup;

  constructor(private router: Router) {
    this.form = new FormGroup({
      origem: new FormControl('', Validators.required),
      destino: new FormControl('', Validators.required),
      tempo: new FormControl('', Validators.required),
      plano: new FormControl('', Validators.required),
    })

    this.onChanges();
  }

  ngOnInit(): void {
  }

  onSunmit() {
    if (this.form.get('plano')?.valid ||
      (this.form.get('origem')?.valid &&
        this.form.get('destino')?.valid &&
        this.form.get('tempo')?.valid)) {

      this.router.navigate(['/checkout', {
        valorPlano: this.total.valorPlano,
        totalSemPlano: this.total.totalSemPlano, totalComPlano: this.total.totalComPlano
      }])
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Preencha pelo menos  o PLANO desejado ou a ORIGEM, DESTINO e o TEMPO!',
        confirmButtonColor: '#AB49CE',
      })
    }
  }

  onChanges() {
    this.form.valueChanges.subscribe(form => {
      const origem = form.origem

      const destino = form.destino

      const tempo = form.tempo

      const plano = form.plano

      switch (tempo || plano) {
        case 20:
          this.total = this.calcularTarifa(origem, destino, tempo, plano)
          break;
        case 30:
          this.total = this.calcularTarifa(origem, destino, tempo, plano)
          break;
        case 40:
          this.total = this.calcularTarifa(origem, destino, tempo, plano)
          break;
        case 60:
          this.total = this.calcularTarifa(origem, destino, tempo, plano)
          break;
        case 80:
          this.total = this.calcularTarifa(origem, destino, tempo, plano)
          break;
        case 100:
          this.total = this.calcularTarifa(origem, destino, tempo, plano)
          break;
        case 120:
          this.total = this.calcularTarifa(origem, destino, tempo, plano)
          break;
        case 150:
          this.total = this.calcularTarifa(origem, destino, tempo, plano)
          break;
        case 200:
          this.total = this.calcularTarifa(origem, destino, tempo, plano)
          break;
      }
    });
  }

  calcularTarifa(origem: string, destino: string, tempo: number, plano: number) {

    const ddd = origem == destino && origem != '' && destino != '' ? 'mesmoDDD' : origem + destino;

    const total: Total = {
      totalSemPlano: 0,
      totalComPlano: 0,
      valorPlano: 0
    }

    if (plano && !ddd) {
      total.valorPlano = plano
      return total
    } else if (!plano && ddd) {
      switch (ddd) {
        case '011016':
          total.totalSemPlano = tempo * dados[ddd]
          return total
          break;
        case '016011':
          total.totalSemPlano = tempo * dados[ddd]
          return total
          break;
        case '011017':
          total.totalSemPlano = tempo * dados[ddd]
          return total
          break;
        case '017011':
          total.totalSemPlano = tempo * dados[ddd]
          return total
          break;
        case '011018':
          total.totalSemPlano = tempo * dados[ddd]
          return total
          break;
        case '018011':
          total.totalSemPlano = tempo * dados[ddd]
          return total
          break;
        case 'mesmoDDD':
          total.totalSemPlano = tempo * dados[ddd]
          return total
          break;
        default:
          return total
          break;
      }
    } else {
      switch (ddd) {
        case '011016':
          total.totalSemPlano = tempo * dados[ddd]
          total.totalComPlano = Math.abs((plano - tempo) > 0 ? 0 : (plano - tempo) * dados[ddd] * 1.1)
          total.valorPlano = plano
          return total
          break;
        case '016011':
          total.totalSemPlano = tempo * dados[ddd]
          total.totalComPlano = Math.abs((plano - tempo) > 0 ? 0 : (plano - tempo) * dados[ddd] * 1.1)
          total.valorPlano = plano
          return total
          break;
        case '011017':
          total.totalSemPlano = tempo * dados[ddd]
          total.totalComPlano = Math.abs((plano - tempo) > 0 ? 0 : (plano - tempo) * dados[ddd] * 1.1)
          total.valorPlano = plano
          return total
          break;
        case '017011':
          total.totalSemPlano = tempo * dados[ddd]
          total.totalComPlano = Math.abs((plano - tempo) > 0 ? 0 : (plano - tempo) * dados[ddd] * 1.1)
          total.valorPlano = plano
          return total
          break;
        case '011018':
          total.totalSemPlano = tempo * dados[ddd]
          total.totalComPlano = Math.abs((plano - tempo) > 0 ? 0 : (plano - tempo) * dados[ddd] * 1.1)
          total.valorPlano = plano
          return total
          break;
        case '018011':
          total.totalSemPlano = tempo * dados[ddd]
          total.totalComPlano = Math.abs((plano - tempo) > 0 ? 0 : (plano - tempo) * dados[ddd] * 1.1)
          total.valorPlano = plano
          return total
          break;
        case 'mesmoDDD':
          total.totalSemPlano = tempo * dados[ddd]
          total.totalComPlano = Math.abs((plano - tempo) > 0 ? 0 : (plano - tempo) * dados[ddd] * 1.1)
          total.valorPlano = plano
          return total
          break;
        default:
          return total
          break;
      }
    }
  }
}
