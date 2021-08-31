import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Customer } from '../../interfaces/customer.interface';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import Swal, { SweetAlertIcon } from 'sweetalert2';


@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor(private http: HttpClient) { }

  private urlBase: string = `${environment.urlBase}/customers`;

  getAll(): Observable<Customer[]>{
    return this.http.get<Customer[]>(`${this.urlBase}/all`).pipe();
  }

  save(customer: Customer){
    return this.http.post<Customer>(`${this.urlBase}/`, customer).pipe(
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
    })
  }
}
