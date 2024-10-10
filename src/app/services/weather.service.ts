import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
 providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeatherData(): Observable<any> {
    let lat = 1.474830;
    let lon = 124.842079;
    let apild = '647cc2db6e21249c2bcc8a6e5943c610';

    let queryString = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly&appid=${apild}`;

    return this.http.get(queryString);
  }

}
