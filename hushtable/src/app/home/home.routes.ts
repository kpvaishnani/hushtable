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
                component:DashboardComponent,
                data: { title: 'Dashboard' }
            },
            {
                path : 'qr-codes',
                component:CodeListComponent,
                data: { title: 'QR Code' }
            },
            {
                path : 'staff',
                component:StaffListComponent,
                data : {title : 'Staff'}
            },
            {
                path:'tables',
                component:TablesComponent,
                data : { title : 'Tables'}
            },
            {
                path:'menu',
                component:MenuItemsListComponent,
                data : {title:'Menu'}
            },
            {
                path:'customers',
                component:CustomersComponent,
                data:{title:'Customers'}
            },
            {
                path:'notifications',
                component:NotificationsComponent,
                data:{title:'Notifications'}
            },
            {
                path:'account',
              component:AccountComponent,
              data:{title:'My Account'}
              },
              {
                path:'setting',
                component:SettingComponent,
                data:{title:'My Account'}
               
              },
              {
                path:'subscription',
                component:MySubscriptionComponent,
                data:{title:'My Account'}
              },
              {
                path:'notification-setting',
                component:NotificationSettingComponent,
                data:{title:'My Account'}
              }
        ]
    },
   
]