import { Component, OnInit } from '@angular/core';
import { Users } from '../../interface/users';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: Users = {
    id: 0,
    username: '',
    password: '',
    role: ''
  }
  listaUsuarios: Users[] = [];

  mostrarPas: boolean = false;
  type: string = 'password';

  constructor(private router: Router, private toastr: ToastrService) {

    if (null == JSON.parse(localStorage.getItem('LitaUser'))) {
      this.listaUsuarios = [];
    } else {
      this.listaUsuarios = JSON.parse(localStorage.getItem('LitaUser'));
    }

  }

  ngOnInit() {
  }

  login() {

    let existeUsuario: string = '';

    if (this.usuario.username == 'admin' || this.usuario.password == 'admin') {
      this.usuario.role = 'ADMIN';
      localStorage.setItem('usuario', JSON.stringify(this.usuario));
      this.router.navigate(['/home'])
      this.toastr.success('Operación Realizada Correctamente', 'Inicio Sesión', {
        timeOut: 4000,
        positionClass: 'toast-top-right'
      });
      return;
    }

    if (null != this.listaUsuarios && this.listaUsuarios.length > 0) {
      for (let i = 0; i < this.listaUsuarios.length; i++) {
        let usuario = this.listaUsuarios[i];
        if (this.usuario.username === usuario.username) {
          if (this.usuario.password === usuario.password) {
            existeUsuario = 'si';
            this.usuario = usuario;
            localStorage.setItem('usuario', JSON.stringify(this.usuario));
            this.router.navigate(['/home'])
            this.toastr.success('Operación Realizada Correctamente', 'Inicio Sesión', {
              timeOut: 4000,
              positionClass: 'toast-top-right'
            });
            return;
          } else if ((i + 1) == this.listaUsuarios.length) {
            existeUsuario = 'Contraseña Mala';
            this.toastr.error('Error al Iniciar Sesion', 'Contraseña incorrecta', {
              timeOut: 2000,
              positionClass: 'toast-top-right',
            });
          }
        } else if ((i + 1) == this.listaUsuarios.length) {
          if (existeUsuario == '') {
            this.toastr.error('Error al Iniciar Sesion', 'Contraseña y username no existen', {
              timeOut: 2000,
              positionClass: 'toast-top-right',
            });
          }
        }
      }
    } else if (this.listaUsuarios.length <= 0) {
      this.toastr.error('Error al Iniciar Sesion', 'Contraseña y username no existen', {
        timeOut: 2000,
        positionClass: 'toast-top-right',
      });
    } 

  }

  mostrarPassword() {

    this.mostrarPas = !this.mostrarPas;

    if (this.mostrarPas) {
      this.type = 'text'
    } else {
      this.type = 'password'
    }

  }
}
