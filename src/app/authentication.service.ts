import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { WEB_SERVICE } from './configurations/config';
import { User  } from './users/interfaces/user';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {
  public currentUser:User;
  public actualUser:any;
  public isLoggedIn:boolean;


  constructor(private http: HttpClient) {
        
  }

  async login(user, password) {

    let body=<User>{
      idUser:user,
      password:password
    }
    let response:any;
      await this.http.post(`${WEB_SERVICE}Login/Login`,body)
        .toPromise()
        .then( res => {
          if (res) 
             this.succesMessage('Bienvenido');
              response = res;
        })
        .catch( (err) => {
          this.errorMessage('La credenciales no concuerdan con los registros existentes');
        });
      if (response) {
        let userLog={
        idUser: response.idUser,
        email: response.email,
        firstName: response.firstName,
        lastName:response.lastName,
        creationDate: response.creationDate
        }
        localStorage.setItem('currentUser', JSON.stringify(userLog));
        localStorage.setItem("isLoggedIn", "true");
        this.isLoggedIn=true;
        return this.isLoggedIn
      }
      return false;
  }



  logout(){



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