import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

/* App Root */
import { AppComponent } from './app.component';

/* Page Modules */
import { IndexModule } from './components/index/index.module'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,  
    HttpModule,
    IndexModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
