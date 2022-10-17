import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { HolidayListComponent } from './holiday-list.component';

@NgModule({
  imports: [MatCardModule, MatFormFieldModule, MatSelectModule, MatOptionModule, CommonModule],
  declarations: [HolidayListComponent],
  providers: [],
  exports: [HolidayListComponent]
})
export class HolidayListComponentModule {
}
