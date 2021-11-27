import { Routes } from "@angular/router";
import { AuthenticationGuard } from "./authentication.guard";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./singup/signup.component";

export const routes: Routes = [
    {path: 'login', component: LoginComponent },
    {path: 'home', component: HomeComponent,  canActivate: [AuthenticationGuard] },
    {path: 'signup', component: SignupComponent}
    ];
    