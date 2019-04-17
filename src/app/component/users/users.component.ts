import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UsersService } from '../../providers/users.service';
import { Users } from '../../interface/users';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  usuarios: Users[] = [];
  listaOrdenada: Users[] = [];
  valor: number = 0;
  path: string[] = ['username'];
  order: number = 1; // 1 asc, -1 desc;
  order1: string = 'nombre';
  reverse: boolean = false;

  constructor(
    public _uS: UsersService,
    public router: Router,
    public activatedRoute: ActivatedRoute,
    public toastr: ToastrService
  ) {

    this._uS.cargarData();

  }

  ngOnInit(): void {

    this.listaOrdenada = this._uS.usersList;

  }


  setValor( idx: number ){

    this.valor = idx;

  }

  borrarUser(){

    let idx = this.valor;
    let user: Users = this._uS.usersList[idx];

    this._uS.borrarUser( idx );
    this._uS.cargarData();
    this.toastr.success('Operación Realizada Correctamente', 'Usuario Eliminado', {
      timeOut: 4000,
      positionClass: 'toast-top-right'
    });

  }

  sortTable(prop: string) {
    this.path = prop.split('.')
    this.order = this.order * (-1); // change order
    if (this.order1 === prop) {
      this.reverse = !this.reverse;
    }

    this.order1 = prop;
    return false; // do not reload
  }
  

}
