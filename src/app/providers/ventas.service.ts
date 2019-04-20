import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/Rx';
import { Venta } from '../interface/venta';

@Injectable({
  providedIn: 'root'
})
export class VentasService {

  ventaList: any[] = [];

  constructor() { }

  nuevaVenta( venta: Venta ){

    this.ventaList.push( venta );
    localStorage.setItem( 'ventaList', JSON.stringify( this.ventaList ) );

  }

}
