import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Category } from '../../interfaces/category.interface';
import { environment } from '../../../environments/environment.prod';
import Swal from 'sweetalert2';
import { SweetAlertIcon } from 'sweetalert2';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(
    private http: HttpClient
  ) { }

  private urlBase: string = `${environment.urlBase}/categories`;

  getAll(): Observable<Category[]>{
    return this.http.get<Category[]>(`${this.urlBase}/all`).pipe(
      catchError(e => {
        this.message('error', e.error.message)
        return throwError(e);
      })
    );
  }

  getAbyId(id: string): Observable<Category>{
    return this.http.get<Category>(`${this.urlBase}/${id}`).pipe(
      catchError(e => {
        this.message('error', e.error.message)
        return throwError(e);
      })
    );
  }

  create(category: Category): Observable<Category>{
    return this.http.post<Category>(`${this.urlBase}`, category).pipe(
      catchError(e => {
        this.message('error', e.error.message)
        return throwError(e);
      })
    );
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
