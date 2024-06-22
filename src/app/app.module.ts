import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductModule } from './product/product.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


const routes: Routes =[
  //lazy loding

  {path: 'products', loadChildren: () =>
    import('./product/product.module').then(m => m.ProductModule)
  },
  //
  {path: '', component: HomeComponent, title:'Home'}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
    //ProductModule// This is for lazy loading

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
