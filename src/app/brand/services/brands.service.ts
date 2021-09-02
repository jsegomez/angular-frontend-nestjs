import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, throwError } from 'rxjs';
import { Brand } from '../../interfaces/brand.interface';
import { catchError } from 'rxjs/operators';
import { SweetAlertIcon } from 'sweetalert2';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class BrandsService {

  constructor(private http: HttpClient) { }

  private urlBase: string = `${environment.urlBase}/brands`;

  getBrands(): Observable<Brand[]>{
    return this.http.get<Brand[]>(`${this.urlBase}/all`).pipe(
      catchError(e => {
        this.message('error', e.error.message)
        return throwError(e);
      })
    );
  }

  getBrandById(id: string): Observable<Brand> {
    return this.http.get<Brand>(`${this.urlBase}/${id}`).pipe(
      catchError(e => {
        this.message('error', e.error.message)
        return throwError(e);
      })
    );
  }

  createBrand(brand: Brand): Observable<Brand>{
    return this.http.post<Brand>(`${this.urlBase}/`, brand).pipe(
      catchError(e => {
        this.message('error', e.error.message)
        return throwError(e);
      })
    );
  }

  updateBrand(id: string, brand: Brand): Observable<Brand>{
    return this.http.put<Brand>(`${this.urlBase}/${id}`, brand).pipe(
      catchError(e => {
        this.message('error', e.error.message)
        return throwError(e);
      })
    );
  }

  deleteBrad(id: string) {
    return this.http.delete<Brand>(`${this.urlBase}/${id}`).pipe(
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
