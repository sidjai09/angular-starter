import {Injectable} from '@angular/core';
import {of} from 'rxjs';
import {map, tap} from 'rxjs/operators';
import {ApiService} from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLogin = false;
  cache: any = {};

  constructor(private apiService: ApiService) {}

  setLogin(userData: {email: string; password: string}): any {
    return this.apiService.post('api/auth/login', userData).pipe(
      map((res) => {
        if (res.statusMessage === 'success') {
          this.setSession(res.data);
        }
        return res;
      })
    );
  }

  private setSession(authResult: any): void {
    this.isLogin = true;
    localStorage.setItem('token', authResult.token);
    localStorage.setItem('firstName', authResult.firstName);
    localStorage.setItem('lastName', authResult.lastName);
    localStorage.setItem('token_type', authResult.token_type);
    localStorage.setItem('token_validity', authResult.token_validity);
    localStorage.setItem('userId', authResult.userId);
    localStorage.setItem('loggedIn', 'Y');
  }

  getCountrys(): any {
    console.log('####Get Countries API called###');

    if (!!this.cache.getCountrys) {
      console.log('####Get Countries API from cache###');
      return of(this.cache.getCountrys);
    }

    return this.apiService.get('api/country').pipe(
      tap((res) => {
        if (res.statusMsg === 'success') {
          this.cache.getCountrys = res;
        }
        return res;
      })
    );
  }
}
