import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "/auth/login",
    pathMatch: 'full'
  },
  {
    path: "auth",
    loadChildren: () =>
    import("./auth/auth.module").then((m) => m.AuthModule)
  },
  {
    path: "admin",
    loadChildren: () =>
    import("./admin/admin.module").then((m) => m.AdminModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
