import { Routes } from '@angular/router';
import { CreateformComponent } from './createform/createform.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Createform2Component } from './createform2/createform2.component';
import { Createform3Component } from './createform3/createform3.component';
import { NavbarComponent } from './navbar/navbar.component';


export const routes: Routes = [
    {
        path: 'create',
        component: CreateformComponent,
    },
    {
        path: '',
        component: DashboardComponent,
    },
    {
        path: 'create/create2',
        component: Createform2Component,
    },
    {
        path: 'create/create2/create3',
        component: Createform3Component,
    }
];
