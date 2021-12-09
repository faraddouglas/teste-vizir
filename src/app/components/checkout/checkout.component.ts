import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  faCheck = faCheck;

  form: FormGroup;
  valorPlano: number;
  totalSemPlano: number;
  totalComPlano: number;
  totalPlano: number;

  constructor(private router: Router, private route: ActivatedRoute) {
    const plano: any =  this.route.snapshot.paramMap.get('valorPlano')
    const semPlano: any = this.route.snapshot.paramMap.get('totalSemPlano')
    const comPlano: any = this.route.snapshot.paramMap.get('totalComPlano')

    this.valorPlano = parseInt(plano)
    this.totalSemPlano = parseInt(semPlano)
    this.totalComPlano = parseInt(comPlano)

    this.totalPlano = this.valorPlano + this.totalComPlano

    this.form = new FormGroup({
      nome: new FormControl('', Validators.required),
      sobrenome: new FormControl('', Validators.required),
      telefone: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
    })
   }

  ngOnInit(): void {
  }

}
