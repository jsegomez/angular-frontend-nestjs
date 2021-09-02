import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { SweetAlertIcon } from 'sweetalert2';
import Swal from 'sweetalert2';
import { Category } from '../../../interfaces/category.interface';
import { CategoriesService } from '../../services/categories.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private categoryService: CategoriesService,
  ) { }

  ngOnInit(): void {}

  private patternUrl = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';

  public formCategory = this.formBuilder.group({
    name: ['', Validators.required],
    image: ['', [Validators.required, Validators.pattern(this.patternUrl)]]
  });

  validarCampo(campo: string) {
    return  this.formCategory.get(campo)?.invalid &&
            this.formCategory.get(campo)?.touched
  }

  save(){
    if(this.formCategory.invalid){
      this.formCategory.markAllAsTouched();
      this.message('error','Favor completar campos marcados en rojo');
      return;
    }

    const category: Category = this.formCategory.value;
    this.categoryService.create(category).subscribe(
      () => this.router.navigate(['/categories/list'])
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
