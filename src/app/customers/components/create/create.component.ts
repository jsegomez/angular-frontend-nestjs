import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal, { SweetAlertIcon } from 'sweetalert2';
import { Customer } from '../../../interfaces/customer.interface';
import { CustomersService } from '../../services/customers.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private customerService: CustomersService
  ) { }

  ngOnInit(): void {
    this.addAddr();
  }

  numbersKey: string[] = ['1','2','3','4','5','6','7','8','9','0'];

  public formCustomer = this.formBuilder.group({
    name        : ['', [Validators.required, Validators.minLength(2)] ],
    lastName    : ['', [Validators.required, Validators.minLength(2)]],
    phone       : ['', [Validators.required,]],
    email       : ['', [Validators.required, Validators.email]],
    addresses   : this.formBuilder.array([]),
  });

  get addresses(){
    return this.formCustomer.get('addresses') as FormArray;
  }

  address = {
    department : ['', [Validators.required]],
    city       : ['', [Validators.required]],
    street     : ['', [Validators.required]],
    number     : ['', [Validators.required]],
    title      : ['', [Validators.required]],
  }

  addAddr(){
    this.addresses.push(this.formBuilder.group(this.address));
  }

  validarCampo(campo: string) {
    return  this.formCustomer.get(campo)?.invalid &&
            this.formCustomer.get(campo)?.touched
  }

  validarDireccion(index: number, input: string) {
    const campo = this.addresses.controls[index].get(input);
    return campo?.invalid && campo?.touched;
  }

  save(){
    if(this.formCustomer.invalid){
      this.formCustomer.markAllAsTouched();
      this.message('error', 'Favor completar los campos marcados en rojo');
      return;
    }

    const data: Customer = this.formCustomer.value;
    this.customerService.save(data).subscribe(
      () => {
        this.message('success', 'Cliente creado con éxito');
        this.router.navigate(['/customers/list'])
      }
    );
  }

  onlyNumbers(event: KeyboardEvent): boolean {
    if(this.numbersKey.includes(event.key)){
      return true
    }

    return false;
  }

  message(iconAlert: SweetAlertIcon, message: string){
    Swal.fire({
      position: 'top-end',
      icon: iconAlert,
      title: message,
      showConfirmButton: false,
      timer: 1500,
      toast: true
    })
  }
}
