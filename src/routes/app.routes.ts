import { Routes } from "@angular/router";
import { LoginComponent } from '../app/components/login/login.component';
import { DashboardComponent } from '../app/components/dashboard/dashboard.component';
import { CreateprojectComponent } from '../app/components/createproject/createproject.component';
import { HomeComponent } from '../app/components/home/home.component';
import { FollowupComponent } from '../app/components/followup/followup.component';
import { RegisterComponent } from '../app/components/register/register.component';
import { ForgotComponent } from '../app/components/forgot/forgot.component';
export const appRoutes:Routes = [
    {path:"",component:LoginComponent},
    {path:"register",component:RegisterComponent},
    {path:"forgot",component:ForgotComponent},
    {path:"dashboard",component:DashboardComponent,
        children:[
            {path:"",component:HomeComponent},
            {path:"create-upate",component:CreateprojectComponent},
            {path:"followup",component:FollowupComponent}
    ]}
];