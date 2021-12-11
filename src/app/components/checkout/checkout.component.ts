import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2'



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
    const plano: any = this.route.snapshot.paramMap.get('valorPlano')
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

      cep: new FormControl('', Validators.required),
      endereco: new FormControl('', Validators.required),
      numero: new FormControl('', Validators.required),
      complemento: new FormControl(''),
      estado: new FormControl('', Validators.required),
      cidade: new FormControl('', Validators.required),

      nomeCartao: new FormControl('', Validators.required),
      numeroCartao: new FormControl('', Validators.required),
      validade: new FormControl('', Validators.required),
      cvv: new FormControl('', [ Validators.required, Validators.minLength(3), Validators.maxLength(4)]),
    })
  }

  ngOnInit(): void {
  }

  onSubmit(e: Event) {

    console.log(this.form)

    if (this.form.invalid) {
      if(this.form.controls.nome.invalid) this.form.controls.nome.markAsTouched();
      if(this.form.controls.sobrenome.invalid) this.form.controls.sobrenome.markAsTouched();
      if(this.form.controls.telefone.invalid) this.form.controls.telefone.markAsTouched();
      if(this.form.controls.email.invalid) this.form.controls.email.markAsTouched();
      if(this.form.controls.cep.invalid) this.form.controls.cep.markAsTouched();
      if(this.form.controls.endereco.invalid) this.form.controls.endereco.markAsTouched();
      if(this.form.controls.numero.invalid) this.form.controls.numero.markAsTouched();
      if(this.form.controls.estado.invalid) this.form.controls.estado.markAsTouched();
      if(this.form.controls.nomeCartao.invalid) this.form.controls.nomeCartao.markAsTouched();
      if(this.form.controls.numeroCartao.invalid) this.form.controls.numeroCartao.markAsTouched();
      if(this.form.controls.validade.invalid) this.form.controls.validade.markAsTouched();
      if(this.form.controls.cvv.invalid) this.form.controls.cvv.markAsTouched();

      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Preencha todos os campos do formulário!',
        confirmButtonColor: '#AB49CE',
      })
    }else {
      this.router.navigate(['/obrigado'])
    }

  }

  get nome() { return this.form.get('nome'); }
  get sobrenome() { return this.form.get('sobrenome'); }
  get telefone() { return this.form.get('telefone'); }
  get email() { return this.form.get('email'); }
  get cep() { return this.form.get('cep'); }
  get endereco() { return this.form.get('endereco'); }
  get numero() { return this.form.get('numero'); }
  get complemento() { return this.form.get('complemento'); }
  get estado() { return this.form.get('estado'); }
  get cidade() { return this.form.get('cidade'); }
  get nomeCartao() { return this.form.get('nomeCartao'); }
  get numeroCartao() { return this.form.get('numeroCartao'); }
  get validade() { return this.form.get('validade'); }
  get cvv() { return this.form.get('cvv'); }



}
