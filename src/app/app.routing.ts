import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../app/component/home/home.component';
import { CategoriasComponent } from '../app/component/categorias/categorias.component';
import { CategoriaComponent } from '../app/component/categoria/categoria.component';
import { ProductosComponent } from '../app/component/productos/productos.component';
import { ProductoComponent } from '../app/component/producto/producto.component';
import { BuscardorComponent } from '../app/component/buscardor/buscardor.component';
import { InventarioComponent } from '../app/component/inventario/inventario.component';
import { UsersComponent } from './component/users/users.component';
import { UserComponent } from './component/user/user.component';
import { AuthGuardLoginServiceServiceService } from './providers/auth-guard-login-service-service.service';
import { LoginComponent } from './component/login/login.component';
import { AuthGuardNoLoginServiceServiceServiceService } from './providers/auth-guard-no-login-service-service-service.service';
import { VentasComponent } from './component/ventas/ventas.component';

const APP_ROUTES: Routes = [
  { 
    path: 'home', 
    component: HomeComponent,
    canActivate: [ AuthGuardNoLoginServiceServiceServiceService ]
  },
  { 
    path: 'categorias', 
    component: CategoriasComponent,
    canActivate: [ AuthGuardNoLoginServiceServiceServiceService ] 
  },
  { 
    path: 'productos', 
    component: ProductosComponent ,
    canActivate: [ AuthGuardNoLoginServiceServiceServiceService ]
  },
  { 
    path: 'categoria/:id', 
    component: CategoriaComponent,
    canActivate: [ AuthGuardNoLoginServiceServiceServiceService ] 
  },
  { 
    path: 'producto/:id', 
    component: ProductoComponent ,
    canActivate: [ AuthGuardNoLoginServiceServiceServiceService ]
  },
  { 
    path: 'buscar', 
    component: BuscardorComponent,
    canActivate: [ AuthGuardNoLoginServiceServiceServiceService ] 
  },
  { 
    path: 'inventario', 
    component: InventarioComponent,
    canActivate: [ AuthGuardNoLoginServiceServiceServiceService ] 
  },
  { 
    path: 'users', 
    component: UsersComponent,
    canActivate: [ AuthGuardNoLoginServiceServiceServiceService ] 
  },
  { 
    path: 'user/:id', 
    component: UserComponent,
    canActivate: [ AuthGuardNoLoginServiceServiceServiceService ] 
  },
  { 
    path: 'ventas', 
    component: VentasComponent,
    canActivate: [ AuthGuardNoLoginServiceServiceServiceService ] 
  },
  { 
    path: 'login',
    component: LoginComponent,
    canActivate: [ AuthGuardLoginServiceServiceService ]
   },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
