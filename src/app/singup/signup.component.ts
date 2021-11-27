import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthenticationService } from '../authentication.service';
import { NewUser } from '../users/interfaces/user';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})


export class SignupComponent implements OnInit {
  submitted = false;
  signupForm: FormGroup;
  signupUser: NewUser = {} as NewUser;
  returnUrl: string;


  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute,private router: Router,
               private auth: AuthenticationService ) {
  }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      idUser: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
    });
  }

  get f() {
    return this.signupForm.controls;
  }


  async onSubmit() {
    this.submitted = true;
    if (this.signupForm.invalid) {
      return;
    }
    await this.auth.createUser(this.f.idUser.value, this.f.email.value,this.f.password.value).then(async (resp)=>{
      if (resp) {
        this.router.navigate(['login']);
      } else {
        Swal.fire(
          'Error',
          'La credenciales no concuerdan con los registros existentes'
        );
      }
    });

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