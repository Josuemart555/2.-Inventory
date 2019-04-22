import { Component, OnInit } from '@angular/core';
import { Venta } from '../../interface/venta';
import { ProductosService } from '../../providers/productos.service';
import { VentasService } from '../../providers/ventas.service';
import { Producto } from '../../interface/producto';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent implements OnInit {

  venta: Venta = {
    id: 0,
    productoId: 0,
    user: '',
    cantidadPro: 0,
    total: 0
  };

  producto: Producto = {
    id: 0,
    nombre: '',
    precio: 0,
    categoria: {
      id: 0,
      nombre: '',
      descripcion: ''
    },
    cantidad: 0
  }
  path: string[] = ['producto'];

  listProduct: Producto[] = [];
  user: any;

  constructor(
    public _pS: ProductosService,
    public toastr: ToastrService,
    public _sV: VentasService
  ) {
    this.user = JSON.parse(localStorage.getItem('usuario'));
  }
  
  ngOnInit() {
    this._pS.cargarDataProductos();
  }

  guardarVenta() {

    if (null == this.venta.productoId) {
      this.toastr.error('Debe de elegir un Producto', 'ERROR', {
        timeOut: 4000,
        positionClass: 'toast-top-right'
      });
      return;
    } else if (null == this.venta.total) {
      this.toastr.error('Debe de ingresar una cantidad de Producto', 'ERROR', {
        timeOut: 4000,
        positionClass: 'toast-top-right'
      });
      return;
    }

    for (let index = 0; index < this._pS.productosList.length; index++) {
      const prod = this._pS.productosList[index];
      if (this.venta.productoId == prod.id) {
        if (prod.cantidad > 0) {
          if (this.venta.cantidadPro <= prod.cantidad) {
            prod.cantidad = prod.cantidad - this.venta.cantidadPro;
            this.venta.id = Math.floor(Math.random() * 1000000)
            this.venta.user = this.user.username;
            this.venta.total = prod.precio * this.venta.cantidadPro;
            this._pS.actualizarProducto(prod, index);
            this._sV.nuevaVenta( this.venta );
            console.log(this.venta)
            this.toastr.success('Venta realizada exitosamente', 'Venta Realizada', {
              timeOut: 4000,
              positionClass: 'toast-top-right'
            });
            return;
          } else {
            this.toastr.error('La cantidad ingresada sobre pasa la existencia del Prodcuto ' + prod.nombre, 'ERROR', {
              timeOut: 4000,
              positionClass: 'toast-top-right'
            });
            return;
          }
        } else {
          this.toastr.error('No hay en existencia de ' + prod.nombre, 'ERROR', {
            timeOut: 4000,
            positionClass: 'toast-top-right'
          });
          return;
        }
      }
    }
  }

}
