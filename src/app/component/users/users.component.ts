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
  path: string[] = ['categoria'];
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

  ngOnInit() {
  }

  

}
