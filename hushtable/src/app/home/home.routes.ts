import { Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { HomeComponent } from "./home/home.component";
import { CodeListComponent } from "./QR-Codes/code-list/code-list.component";


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
            }
        ]
    },
   
]