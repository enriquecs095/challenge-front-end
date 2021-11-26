import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
import { WEB_SERVICE } from '../configurations/config';
import { NewComment } from './interfaces/user';


@Injectable({
  providedIn: 'root'
})

export class HomeService {


  constructor(private http: HttpClient) {
        
  }

  async SendThought(comment) {
    let userLog= JSON.parse(localStorage.getItem("currentUser"));
    let body=<NewComment>{
      user:userLog.idUser,
      comment:comment
    }
    let response:any;
      await this.http.post(`${WEB_SERVICE}Timeline/AddComment`,body)
        .toPromise()
        .then( res => {
          if (res) 
             this.succesMessage('Enviado');
              response = res;
        })
        .catch( (err) => {
          this.errorMessage('Error al enviar');
        });
      if (response) {
        return true
      }
      return false;
  }


  succesMessage(message) {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: message,
      showConfirmButton: false,
      timer: 1500,
    });
  }


  errorMessage(message) {
    Swal.fire({
      title: 'Error',
      text: message,
      icon: 'error',
    });
  }

}