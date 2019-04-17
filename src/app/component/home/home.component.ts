import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor(
    private router: Router,
    private appCom: AppComponent
             ){
               if (!this.appCom.mostrarNavbar) {
                location.reload();
                return;   
               }
              
              }

  ngOnInit() {
  }

}
