import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SweetAlertIcon } from 'sweetalert2';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { BrandsService } from '../../services/brands.service';
import { Brand } from '../../../interfaces/brand.interface';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private brandService: BrandsService
  ) { }

  ngOnInit(): void {}

  private patternUrl = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';

  public formBrand = this.formBuilder.group({
    name: ['', Validators.required],
    image: ['', [Validators.required, Validators.pattern(this.patternUrl)]]
  });

  validarCampo(campo: string) {
    return  this.formBrand.get(campo)?.invalid &&
            this.formBrand.get(campo)?.touched
  }

  save(){
    if(this.formBrand.invalid){
      this.formBrand.markAllAsTouched();
      this.message('error','Favor completar campos marcados en rojo');
      return;
    }

    const brand: Brand = this.formBrand.value;

    this.brandService.createBrand(brand).subscribe(
      () => this.router.navigate(['/brands/list'])
    )
  }

  message(iconAlert: SweetAlertIcon, message: string){
    Swal.fire({
      position: 'top-end',
      icon: iconAlert,
      title: message,
      showConfirmButton: false,
      timer: 1500,
      toast: true
    });
  }
}
