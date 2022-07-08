import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auths/auth.guard';
import { AdminComponent } from './pages/admin/admin.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { UnSavedChangesGuardGuard } from './auths/GcanDeactivate/un-saved-changes-guard.guard';
const routes: Routes = [
  { path: 'login', component: LoginComponent ,canDeactivate:[UnSavedChangesGuardGuard] },
  { path: 'not-found', component: NotfoundComponent },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard]},
  { path: '', component: HomeComponent },
  { path: '**', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
