import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { DashboardPageRoutingModule } from './dashboard-routing.module';
import { DashboardPage } from './dashboard.page';
import { WidgetDeviceComponent } from './components/widget-device/widget-device.component';
import { WidgetSurveyComponent } from './components/widget-survey/widget-survey.component';
import { DeviceSetupComponent } from './pages/device-setup/device-setup.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardPageRoutingModule
  ],
  declarations: [
    DashboardPage,
    WidgetDeviceComponent,
    WidgetSurveyComponent,
    DeviceSetupComponent
  ],
  entryComponents: [
    DeviceSetupComponent
  ]
})
export class DashboardPageModule { }
