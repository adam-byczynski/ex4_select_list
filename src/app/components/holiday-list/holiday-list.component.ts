import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { GetHolidayDataService } from '../../services/get-holiday-data.service';
import {map, Observable} from "rxjs";
import {HolidayDTOModel} from "../../models/holiday-dto.model";

@Component({
  selector: 'app-holiday-list',
  styleUrls: ['./holiday-list.component.scss'],
  templateUrl: './holiday-list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HolidayListComponent {
  constructor(private _getHolidayDataService: GetHolidayDataService) {
  }
  holidays$: Observable<string[]> = this._getHolidayDataService.getHolidayData().pipe(
    map(
      (holidays: HolidayDTOModel[]) => holidays.map(
        (holiday: HolidayDTOModel) => holiday.localName)
    )
  )
}
