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
import { AuthGuardUserPermitsService } from './providers/auth-guard-user-permits.service';
import { AuthGuardUserPermitsUserService } from './providers/auth-guard-user-permits-user.service';

const APP_ROUTES: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuardNoLoginServiceServiceServiceService]
  },
  {
    path: 'categorias',
    component: CategoriasComponent,
    canActivate: [AuthGuardNoLoginServiceServiceServiceService, AuthGuardUserPermitsService]
  },
  {
    path: 'productos',
    component: ProductosComponent,
    canActivate: [AuthGuardNoLoginServiceServiceServiceService, AuthGuardUserPermitsService]
  },
  {
    path: 'categoria/:id',
    component: CategoriaComponent,
    canActivate: [AuthGuardNoLoginServiceServiceServiceService, AuthGuardUserPermitsService]
  },
  {
    path: 'producto/:id',
    component: ProductoComponent,
    canActivate: [AuthGuardNoLoginServiceServiceServiceService, AuthGuardUserPermitsService]
  },
  {
    path: 'buscar',
    component: BuscardorComponent,
    canActivate: [AuthGuardNoLoginServiceServiceServiceService, AuthGuardUserPermitsService]
  },
  {
    path: 'inventario',
    component: InventarioComponent,
    canActivate: [AuthGuardNoLoginServiceServiceServiceService, AuthGuardUserPermitsService]
  },
  {
    path: 'users',
    component: UsersComponent,
    canActivate: [AuthGuardNoLoginServiceServiceServiceService, AuthGuardUserPermitsService, AuthGuardUserPermitsUserService]
  },
  {
    path: 'user/:id',
    component: UserComponent,
    canActivate: [AuthGuardNoLoginServiceServiceServiceService, AuthGuardUserPermitsService]
  },
  {
    path: 'ventas',
    component: VentasComponent,
    canActivate: [AuthGuardNoLoginServiceServiceServiceService, AuthGuardUserPermitsService]
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AuthGuardLoginServiceServiceService]
  },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
