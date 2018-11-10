import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { CodebreakerService } from '../app/codebreaker.service';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';



import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { RouterModule, Routes } from '@angular/router';
import { GuestComponent } from './guest/guest.component';


const appRoutes: Routes = [
  { path: '', component: MainComponent},
  { path: 'codebreaker', component: MainComponent},
  { path: 'guest', component: GuestComponent},
  { path: '**', component: MainComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    GuestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    RouterModule
  ],
  providers: [CodebreakerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
