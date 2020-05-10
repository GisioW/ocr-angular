import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppareilComponent } from './appareil/appareil.component';
import {FormsModule} from '@angular/forms';
import { AuthComponent } from './auth/auth.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import {RouterModule, Routes} from '@angular/router';
import { SingleAppareilComponent } from './appareil/single-appareil/single-appareil.component';
import {NotFoundComponent} from './not-found-component';
import {AuthGardGuard} from './auth/auth-gard.guard';

const routes: Routes = [
  {path: 'appareils', component: AppareilViewComponent, canActivate: [AuthGardGuard]},
  {path: 'appareils/:id', component: SingleAppareilComponent, canActivate: [AuthGardGuard]},
  {path: 'auth', component: AuthComponent},
  {path: '', component: AuthComponent},
  {path: 'not-found', component: NotFoundComponent},
  {path: '**', redirectTo : 'not-found'}
];

@NgModule({
  declarations: [
    AppComponent,
    AppareilComponent,
    AuthComponent,
    AppareilViewComponent,
    SingleAppareilComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
