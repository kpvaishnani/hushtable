import { Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { HomeComponent } from "./home/home.component";
import { CodeListComponent } from "./QR-Codes/code-list/code-list.component";
import { StaffListComponent } from "./staff/staff-list/staff-list.component";
import { TablesComponent } from "./tables/tables.component";
import { MenuItemsListComponent } from "./menu/menu-items-list/menu-items-list.component";


export const routes : Routes = [
    {
        path:'',
        component:HomeComponent,
        children:[
            {
                path:'',
                component:DashboardComponent
            },
            {
                path : 'qr-codes',
                component:CodeListComponent
            },
            {
                path : 'staff',
                component:StaffListComponent
            },
            {
                path:'tables',
                component:TablesComponent
            },
            {
                path:'menu',
                component:MenuItemsListComponent
            }
        ]
    },
   
]