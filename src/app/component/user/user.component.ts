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


  constructor(
    public _uS: UsersService,
    public router: Router,
    public activatedRoute: ActivatedRoute,
    public toastr: ToastrService
  ) {
    this.activatedRoute.params.subscribe( parametros =>{
      this.idx = parametros['id']
      if ( this.idx !== 'nuevo' ) {

        this.user = this._uS.usersList[this.idx]
      }
    })
    this.user.role = '-1';
  }

  ngOnInit() {
  }

  guardarUser(){
    console.log('entro metodo')
    console.log(this.user)
    if ( this.idx != 'nuevo' ) {
      console.log('actualiza registro')
        this._uS.actualizarUser( this.user, this.idx );
        this.toastr.success('Operación Realizada Correctamente', 'Usuario Actualizado', {
          timeOut: 4000,
          positionClass: 'toast-top-right'
        });
        this.router.navigate( ['/users'] )
    } else {
      console.log('nuevo registro')
      this.user.id = Math.floor(Math.random() * 1000000);
      this._uS.nuevoUser( this.user );
      this.router.navigate( ['/users'] )
      this.toastr.success('Operación Realizada Correctamente', 'Usuario Agregado', {
        timeOut: 4000,
        positionClass: 'toast-top-right'
      });
    }
  
}

}
