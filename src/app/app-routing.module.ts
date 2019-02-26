import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserLoginComponent } from './components/user/user-login/user-login.component'
import { UserRegisterComponent } from './components/user/user-register/user-register.component'
import { HomeComponent } from './components/home/home.component'
import { BoatComponent } from './components/boat/boat.component';
import { BoatAddComponent } from './components/boat/boat-add/boat-add.component';
import { BoatEditComponent } from './components/boat/boat-edit/boat-edit.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'user/login',
    component: UserLoginComponent
  },
  {
    path: 'user/register',
    component: UserRegisterComponent
  },
  {
    path: 'boat',
    component: BoatComponent
  },
  {
    path: 'boat/add',
    component: BoatAddComponent
  },
  {
    path: 'boat/edit/:boatId',
    component: BoatEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
