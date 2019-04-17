import { Component, OnInit } from '@angular/core';
import { Venta } from '../../interface/venta';
import { ProductosService } from '../../providers/productos.service';
import { Producto } from '../../interface/producto';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent implements OnInit {

  venta: Venta = {
    productoId: 0,
    user:'',
    cantidadPro: 0,
    total: 0
  };

  listProduct: Producto[] = [];

  constructor(private _pS: ProductosService) { }

  ngOnInit() {
  }

}
