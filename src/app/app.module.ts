import { HTTP_INTERCEPTORS,HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorldCovidDetailsComponent } from './components/world-covid-details/world-covid-details.component';
import { HttpErrorInterceptor } from './interceptors/http-error-interceptor';
import { HttpInterceptor } from './interceptors/http-interceptor';
import { HttpService } from './services/http.service';

@NgModule({
  declarations: [
    AppComponent,
    WorldCovidDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HttpService,
  {
    provide:HTTP_INTERCEPTORS,
    useClass:HttpInterceptor,
    multi:true
  },
{
  provide:HTTP_INTERCEPTORS,
  useClass:HttpErrorInterceptor,
  multi:true,
}],
  bootstrap: [AppComponent]
})
export class AppModule { }
