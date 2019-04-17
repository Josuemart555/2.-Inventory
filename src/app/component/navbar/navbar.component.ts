import { Component, OnInit, ViewChild, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user: any;

  constructor( private router: Router,private appcom: AppComponent) {
    this.user = JSON.parse(localStorage.getItem('usuario'));
  }

  ngOnInit() {
  }

  salir(){

    localStorage.setItem('usuario', null);
    this.router.navigate( ['login'] );
    this.appcom.mostrarNavbar = false;

  }  

}
