import {RouterModule, Routes} from "@angular/router";

import {HomeComponent} from "./Home";
import {LoginComponent} from "./Login";
import {RegisterComponent} from "./Register";

const routers: Routes = [
    {path: '', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},

    {path: '**', redirectTo: ''},
];

export const appRoutingModule = RouterModule.forRoot(routers);