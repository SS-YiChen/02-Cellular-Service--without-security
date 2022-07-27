import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { UserComponent } from './pages/user/user.component';
import { DeviceListComponent } from './pages/device-list/device-list.component';
import { CreateUserComponent } from './pages/user/create-user/create-user.component';
import { AddDeviceComponent } from './pages/add-device/add-device.component';
import { UpdateDeviceComponent } from './pages/update-device/update-device.component';
import { PlanComponent } from './pages/plan/plan.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/login' },
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
  { path: 'user' , component: UserComponent},
  { path: 'login', component: LoginComponent},
  { path: 'logout', component: LogoutComponent},
  { path: 'device', component: DeviceListComponent},
  { path: 'createuser', component:CreateUserComponent},
  { path: 'adddevice', component: AddDeviceComponent},
  {path: 'updatedevice/:id', component: UpdateDeviceComponent},
  {path: 'plan', component: PlanComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
