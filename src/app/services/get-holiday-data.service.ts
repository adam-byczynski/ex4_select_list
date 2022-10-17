import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";
import {HolidayDTOModel} from "../models/holiday-dto.model";

@Injectable()
export class GetHolidayDataService {
  constructor(private _httpClient: HttpClient) {
  }
  getHolidayData(): Observable<HolidayDTOModel[]> {
    return this._httpClient.get<HolidayDTOModel[]>('https://date.nager.at/api/v2/publicholidays/2020/US');
  }
}
