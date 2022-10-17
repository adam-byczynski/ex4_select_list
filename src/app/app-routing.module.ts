import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HolidayListComponent } from './components/holiday-list/holiday-list.component';
import { HolidayListComponentModule } from './components/holiday-list/holiday-list.component-module';
import { GetHolidayDataServiceModule } from './services/get-holiday-data.service-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'public-holidays', component: HolidayListComponent }]), HolidayListComponentModule, GetHolidayDataServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
