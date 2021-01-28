import {Injectable} from '@angular/core';
import {Resolve} from '@angular/router';
import {Observable} from 'rxjs';

import {AuthService} from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class CountryListResolver implements Resolve<boolean> {
  constructor(private authService: AuthService) {}

  resolve(): Observable<boolean> {
    console.log('###Resolver Called');

    return this.authService.getCountrys();
  }
}
