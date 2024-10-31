import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-delivery-info',
  standalone: true,
  imports: [ReactiveFormsModule, InputTextModule, ButtonModule, MatCardModule],
  templateUrl: './delivery-info.component.html',
  styleUrls: ['./delivery-info.component.css']
})
export class DeliveryInfoComponent implements OnInit {
  @Output() pedidoEnviado = new EventEmitter<void>(); // Emissor de evento

  form!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      nome: [null, Validators.required],
      telefone: [null, Validators.required],
      endereco: [null, Validators.required]
    });
  }

  // Método para enviar o pedido
  enviarPedido(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      console.log('Formulário enviado:', this.form.value);
      this.pedidoEnviado.emit(); // Emitindo o evento
      this.router.navigate(['/order-status'], {
        queryParams: {
          nome: this.form.get('nome')?.value,
          telefone: this.form.get('telefone')?.value,
          endereco: this.form.get('endereco')?.value
        }
      });
    } else {
      console.log('Por favor, preencha todos os campos obrigatórios');
    }
  }
}


