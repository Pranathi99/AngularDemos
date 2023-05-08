import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { ServerComponent } from './server/server.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NamesComponent } from './names/names.component';
import { SecretComponent } from './secret/secret.component';
import { AddproductComponent } from './products/addproduct/addproduct.component';
import { ProductComponent } from './products/product/product.component';
import { BasicHighlightDirective } from './custom-directives/BasicHighlightDirective';
import { BetterHighlightDirective } from './custom-directives/BetterHighlightDirective';
import { AccountsComponent } from './accounts/accounts.component';
import { AccountComponent } from './accounts/account/account.component';
import { NewaccountComponent } from './accounts/newaccount/newaccount.component';
import { AccountService } from 'src/app/services/AccountServices';
import { LifecycledemoComponent } from './lifecycledemo/lifecycledemo.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ObservablesdemoComponent } from './observablesdemo/observablesdemo.component';
import { TformsComponent } from './tforms/tforms.component';
import { RformsComponent } from './rforms/rforms.component';
import { PipesdemoComponent } from './pipesdemo/pipesdemo.component';
import { ShortenPipe } from './commonpipes/shorten-pipe';
import { FilterPipe } from './commonpipes/filter-pipe';
import { ReversePipe } from './commonpipes/reverse-pipe';
import { BlogpostsComponent } from './blogposts/blogposts.component';
import { HttpClientModule } from '@angular/common/http';
import { BlogpostComponent } from './blogposts/blogpost/blogpost.component';
import { BlogpostService } from './services/blogpost.service';

const appRoutes:Routes=[
  {path:'',component:HomeComponent},
  {path:'server',component:ServerComponent},
  {path:'warningalert',component:WarningAlertComponent},
  {path:'accounts',component:AccountsComponent},
  {path:'names',component:NamesComponent},
  {path:'products',component:ProductsComponent},
  {path:'secret',component:SecretComponent},
  {path:'successalert',component:SuccessAlertComponent},
  {path:'observables',component:ObservablesdemoComponent},
  {path:'tforms',component:TformsComponent},
  {path:'rforms',component:RformsComponent},
  {path:'pipes',component:PipesdemoComponent},
  {path:'blogs',component:BlogpostsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    ServerComponent,
    NamesComponent,
    SecretComponent,
    AddproductComponent,
    ProductComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    AccountsComponent,
    AccountComponent,
    NewaccountComponent,
    LifecycledemoComponent,
    HomeComponent,
    ObservablesdemoComponent,
    TformsComponent,
    RformsComponent,
    PipesdemoComponent,
    ShortenPipe,
    FilterPipe,
    ReversePipe,
    BlogpostsComponent,
    BlogpostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
  ],
  providers: [AccountService,BlogpostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
