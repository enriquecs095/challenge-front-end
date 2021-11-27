
import {  Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent  {

  constructor( public auth: AuthenticationService, private router: Router){}

logout(){
  this.auth.logout();
  this.router.navigate(['login']);
}

}