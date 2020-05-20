import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './Auth/Admin/admin/admin.component';
import { AdminHomeComponent } from './Admin/admin-home/admin-home.component';
import { LogisticsHomeComponent } from './Logistics/logistics-home/logistics-home.component';
import { AddLogisticsComponent } from './Admin/add-logistics/add-logistics.component';
import { AdduserComponent } from './Admin/adduser/adduser.component';
import { DeleteUserComponent } from './Admin/delete-user/delete-user.component';
import { SchedulingComponent } from './Admin/scheduling/scheduling.component';
import { SchedulingListComponent } from './Admin/scheduling-list/scheduling-list.component';
import { AcceptOrderComponent } from './Logistics/accept-order/accept-order.component';
import { UpdateVehicleDetailsComponent } from './Logistics/update-vehicle-details/update-vehicle-details.component';
import { GenerateSlotsComponent } from './Admin/Slots/generate-slots/generate-slots.component';
import { UpdateSlotTimingComponent } from './Admin/Slots/update-slot-timing/update-slot-timing.component';
import { OrderListComponent } from './Logistics/order-list/order-list.component';
import { UpdateSlotMaintanenceComponent } from './Admin/Slots/update-slot-maintanence/update-slot-maintanence.component';



const routes: Routes = [{
  path:'navbar',component:NavbarComponent
},
{
  path:'',component:HomeComponent
},
{
  path:'admin',component:AdminComponent
},
{
  path:'admin-home',component:AdminHomeComponent
},
{
  path:'logistics-home',component:LogisticsHomeComponent
},
{
  path:'addlogistics',component:AddLogisticsComponent
},
{
  path:'adduser',component:AdduserComponent
},
{
  path:'deletelogistics',component:DeleteUserComponent
},
{
  path:'appointment',component:SchedulingComponent
},
{
  path:'edit',component:SchedulingComponent
},
{
  path:'edit/:appointmentid',component:SchedulingComponent
},
{
  path:'appointment-list',component:SchedulingListComponent
},
{
  path:'selection',component:AcceptOrderComponent
},
{
  path:'update/:orderId',component:AcceptOrderComponent
},
{
  path:'generateslots',component:GenerateSlotsComponent
},
{
  path:'updateslottiming',component:UpdateSlotTimingComponent
},
{
  path:'order-list',component:OrderListComponent
},
{
  path:'updatevehicle/:orderId',component:UpdateVehicleDetailsComponent
},
{
  path:'slotmaintanence',component:UpdateSlotMaintanenceComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
