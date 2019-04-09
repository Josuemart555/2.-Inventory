import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/Rx';
import { Users } from '../interface/users';

@Injectable()
export class UsersService {

  public usersList: Users[] = [];

  constructor( private http: Http ){

  }

  cargarData(){

    if ( localStorage.getItem( 'LitaUser' ) ) {

      this.usersList = JSON.parse( localStorage.getItem( 'LitaUser' ) );

    }

  }

  actualizarDatauser(){

    localStorage.setItem( 'LitaUser', JSON.stringify( this.usersList ) );

  }

  nuevoUser( user: Users ){

    this.usersList.push( user );
    localStorage.setItem( 'LitaUser', JSON.stringify( this.usersList ) );

  }

  actualizarUser( user: Users, idx: number ){

    for (let user1 of this.usersList) {
        if (user1.id == user.id) {
            user1 = user;
            this.usersList.splice( idx, 1 );
            this.usersList.push( user1 );
            break;
        }
    }

    localStorage.setItem( 'LitaCategorias', JSON.stringify( this.usersList ) );
    this.actualizarDatauser();
    return;

  }

  borrarUser( idx: number ){

    this.usersList.splice( idx, 1 );
    this.actualizarDatauser();

  }

}
