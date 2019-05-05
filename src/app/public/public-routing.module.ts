import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const myroutes: Routes=[
 {path:"", component: RegisterComponent},
 {path:"register", component: RegisterComponent},
   {path:"login", component: LoginComponent},
    // {path:"**",component: RegisterComponent}
]
@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(myroutes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
