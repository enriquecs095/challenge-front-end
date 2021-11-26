import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthenticationService } from './authentication.service';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { routes } from './routes';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    HomeComponent
  ],
  
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)

  ],
  exports: [RouterModule],

  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
