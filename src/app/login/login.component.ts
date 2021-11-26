import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { User } from '../users/interfaces/user';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})


export class LoginComponent implements OnInit {
  submitted = false;
  loginForm: FormGroup;
  loginUser: User = {} as User;
  returnUrl: string;


  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute,private router: Router
            ) {
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      idUser: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  get f() {
    return this.loginForm.controls;
  }


  async onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }/*
    await this.auth.login(this.f.user.value, this.f.password.value).then(async (resp)=>{
      if (resp) {
        await this.userService.loadPrivilegesUser();
        this.router.navigate(['home']);
      } else {
        Swal.fire(
          'Error',
          'La credenciales no concuerdan con los registros existentes'
        );
      }
    });*/

  }

  keyPressAlphanumeric(event:any) {
    var inp = String.fromCharCode(event.keyCode);
    if (/[a-zA-Z0-9\u00F1A_ ]/.test(inp)) {
      return true;
    } else {
      event.preventDefault();
      return false;
    }

  }

  


}