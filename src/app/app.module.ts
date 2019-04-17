import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { OrderModule } from 'ngx-order-pipe';

//routes
import { APP_ROUTING } from './app.routing';

//services
import { CategoriasService } from '../app/providers/categorias.service';
import { ProductosService } from '../app/providers/productos.service';

//pipe
import { KeysPipe } from './pipe/keys.pipe';

import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { CategoriasComponent } from './component/categorias/categorias.component';
import { CategoriaComponent } from './component/categoria/categoria.component';
import { ProductosComponent } from './component/productos/productos.component';
import { ProductoComponent } from './component/producto/producto.component';
import { BuscardorComponent } from './component/buscardor/buscardor.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { InventarioComponent } from './component/inventario/inventario.component';
import { SortingCompaniesPipe } from './pipe/sorting-companies.pipe';
import { SortingCategoryPipe } from './pipe/sorting-category.pipe';
import { UsersComponent } from './component/users/users.component';
import { UsersService } from './providers/users.service';
import { UserComponent } from './component/user/user.component';
import { LoginComponent } from './component/login/login.component';
import { AuthGuardLoginServiceServiceService } from './providers/auth-guard-login-service-service.service';
import { LoginService } from './providers/login.service';
import { AuthGuardNoLoginServiceServiceServiceService } from './providers/auth-guard-no-login-service-service-service.service';
import { VentasComponent } from './component/ventas/ventas.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CategoriasComponent,
    KeysPipe,
    CategoriaComponent,
    ProductosComponent,
    ProductoComponent,
    BuscardorComponent,
    NavbarComponent,
    InventarioComponent,
    SortingCompaniesPipe,
    SortingCategoryPipe,
    UsersComponent,
    UserComponent,
    LoginComponent,
    VentasComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    HttpModule,
    FormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    OrderModule
  ],
  providers: [
    CategoriasService,
    ProductosService,
    UsersService,
    AuthGuardLoginServiceServiceService,
    LoginService,
    AuthGuardNoLoginServiceServiceServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
