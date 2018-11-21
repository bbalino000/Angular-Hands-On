import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';
import { NavsideComponent } from './navside/navside.component';
import { NavtopComponent } from './navtop/navtop.component';
import { NavcontentComponent } from './navcontent/navcontent.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { QuotationComponent } from './quotation/quotation.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    NavsideComponent,
    NavtopComponent,
    NavcontentComponent,
    BreadcrumbsComponent,
    QuotationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
