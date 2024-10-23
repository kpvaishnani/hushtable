import { Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { HomeComponent } from "./home/home.component";
import { CodeListComponent } from "./QR-Codes/code-list/code-list.component";
import { StaffListComponent } from "./staff/staff-list/staff-list.component";
import { TablesComponent } from "./tables/tables.component";
import { MenuItemsListComponent } from "./menu/menu-items-list/menu-items-list.component";
import { CustomersComponent } from "./customers/customers.component";
import { NotificationsComponent } from "./notifications/notifications.component";
import { AccountComponent } from "./account/account/account.component";
import { MySubscriptionComponent } from "./my-subscription/my-subscription.component";
import { NotificationSettingComponent } from "./notification-setting/notification-setting.component";
import { SettingComponent } from "./setting/setting.component";


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
            },
            {
                path:'customers',
                component:CustomersComponent
            },
            {
                path:'notifications',
                component:NotificationsComponent
            },
            {
                path:'account',
              component:AccountComponent
              },
              {
                path:'setting',
                component:SettingComponent
              },
              {
                path:'subscription',
                component:MySubscriptionComponent
              },
              {
                path:'notification-setting',
                component:NotificationSettingComponent
              }
        ]
    },
   
]