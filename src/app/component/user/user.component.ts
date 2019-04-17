import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Users } from '../../interface/users';
import { UsersService } from '../../providers/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: Users = {
    id: 0,
    username: '',
    password: '',
    role: ''
  }

  users: any = [
    {
      username: 'admin',
      password: 'admin',
      role: 'ADMIN'
    }
  ]

  usersList: Users[] = [];
  idx: any;
  path: string[] = ['nombre'];

  mostrarPas: boolean = false;
  type: string = 'password';


  constructor(
    public _uS: UsersService,
    public router: Router,
    public activatedRoute: ActivatedRoute,
    public toastr: ToastrService
  ) {
    this.activatedRoute.params.subscribe(parametros => {
      this.idx = parametros['id']
      if (this.idx !== 'nuevo') {

        this.user = this._uS.usersList[this.idx]
      } else {
        this.user.role = '-1';
      }
    })

  }

  ngOnInit() {
  }

  guardarUser() {

    if (this.idx != 'nuevo') {
      this._uS.actualizarUser(this.user, this.idx);
      this.toastr.success('Operación Realizada Correctamente', 'Usuario Actualizado', {
        timeOut: 4000,
        positionClass: 'toast-top-right'
      });
      this.router.navigate(['/users'])
    } else {
      this.user.id = Math.floor(Math.random() * 1000000);
      localStorage.setItem('usuario', JSON.stringify(this.user));
      this._uS.nuevoUser(this.user);
      this.router.navigate(['/users'])
      this.toastr.success('Operación Realizada Correctamente', 'Usuario Agregado', {
        timeOut: 4000,
        positionClass: 'toast-top-right'
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
