import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { SearchService } from './search.service';
import { LoginService } from './login.service';
import { OrderModule } from 'ngx-order-pipe';
import 'rxjs/add/operator/map';

const routers = [
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'search/:user',
    component: SearchPageComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    SearchPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    OrderModule,
    RouterModule.forRoot(routers)
  ],
  providers: [SearchService,
              LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
