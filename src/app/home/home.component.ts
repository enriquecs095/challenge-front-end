
import {  Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { HomeService } from '../users/home.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {
    
    ngOnInit(): void {
       
    }

    constructor(private homeService: HomeService){

    }

    @ViewChild("comment") comment: ElementRef;

  
  async Send() {
   let commentUser=this.comment.nativeElement.value;
    await this.homeService.SendThought(commentUser).then(async (resp)=>{
      if (resp) {
        
      } else {
        Swal.fire(
          'Error',
          'No se pudo enviar'
        );
      }
    });

  }


}