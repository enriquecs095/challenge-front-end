import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./singup/signup.component";

export const routes: Routes = [
    {path: 'login', component: LoginComponent },
    {path: 'home', component: HomeComponent },
    {path: 'signup', component: SignupComponent}
    ];
    