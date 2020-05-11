import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppareilComponent } from './appareil/appareil.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AuthComponent } from './auth/auth.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import {RouterModule, Routes} from '@angular/router';
import { SingleAppareilComponent } from './appareil/single-appareil/single-appareil.component';
import {NotFoundComponent} from './not-found-component';
import {AuthGardGuard} from './auth/auth-gard.guard';
import { EditAppareilComponent } from './edit-appareil/edit-appareil.component';
import { UserListComponent } from './user-list/user-list.component';
import { NewUserComponent } from './new-user/new-user.component';

const routes: Routes = [
  {path: 'appareils', component: AppareilViewComponent, canActivate: [AuthGardGuard]},
  {path: 'appareils/edit', component: EditAppareilComponent, canActivate: [AuthGardGuard]},
  {path: 'appareils/:id', component: SingleAppareilComponent, canActivate: [AuthGardGuard]},
  {path: 'users', component: UserListComponent},
  {path: 'user', component: NewUserComponent},
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
    NotFoundComponent,
    EditAppareilComponent,
    UserListComponent,
    NewUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
