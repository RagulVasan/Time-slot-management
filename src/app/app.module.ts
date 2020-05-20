import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {ReactiveFormsModule,FormsModule} from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {

  MatToolbarModule,
  MatButtonModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatTableModule,
  MatProgressSpinnerModule,
  MatExpansionModule,
  MatSelectModule,
  MatOptionModule,

}from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './Auth/Admin/admin/admin.component';
import { LoginComponent } from './Auth/Logistics/login/login.component';
import { SignupComponent } from './Auth/Logistics/signup/signup.component';
import { AdminHomeComponent } from './Admin/admin-home/admin-home.component';
import { SchedulingComponent } from './Admin/scheduling/scheduling.component';
import { SchedulingListComponent } from './Admin/scheduling-list/scheduling-list.component';
import { AdduserComponent } from './Admin/adduser/adduser.component';
import { DeleteUserComponent } from './Admin/delete-user/delete-user.component';
import { AddLogisticsComponent } from './Admin/add-logistics/add-logistics.component';
import { LogisticsHomeComponent } from './Logistics/logistics-home/logistics-home.component';
import { AcceptOrderComponent } from './Logistics/accept-order/accept-order.component';
import { UpdateVehicleDetailsComponent } from './Logistics/update-vehicle-details/update-vehicle-details.component';
import { GenerateSlotsComponent } from './Admin/Slots/generate-slots/generate-slots.component';
import { UpdateSlotTimingComponent } from './Admin/Slots/update-slot-timing/update-slot-timing.component';
import { OrderListComponent } from './Logistics/order-list/order-list.component';
import { RescheduleSlotsComponent } from './Logistics/reschedule-slots/reschedule-slots.component';
import { UpdateSlotMaintanenceComponent } from './Admin/Slots/update-slot-maintanence/update-slot-maintanence.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AdminComponent,
    LoginComponent,
    SignupComponent,
    AdminHomeComponent,
    SchedulingComponent,
    SchedulingListComponent,
    AdduserComponent,
    DeleteUserComponent,
    AddLogisticsComponent,
    LogisticsHomeComponent,
    AcceptOrderComponent,
    UpdateVehicleDetailsComponent,
    GenerateSlotsComponent,
    UpdateSlotTimingComponent,
    OrderListComponent,
    RescheduleSlotsComponent,
    UpdateSlotMaintanenceComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatExpansionModule,   
    MatButtonModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
