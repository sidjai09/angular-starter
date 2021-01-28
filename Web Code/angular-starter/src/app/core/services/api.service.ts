import {Injectable} from '@angular/core';
import {HttpHeaders, HttpClient, HttpParams} from '@angular/common/http';

import {environment} from '../../../environments/environment';

import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {}

  private formatErrors(error: any): any {
    return throwError(error.error);
  }

  get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.get(`${environment.serverUrl}${path}`, {headers, params}).pipe(catchError(this.formatErrors));
  }

  put(path: string, body: object = {}): Observable<any> {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.put(`${environment.serverUrl}${path}`, JSON.stringify(body), {headers}).pipe(catchError(this.formatErrors));
  }

  putParams(path: string, params: HttpParams): Observable<any> {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    const postbody = {};
    return this.http.put(`${environment.serverUrl}${path}`, postbody, {headers, params}).pipe(catchError(this.formatErrors));
  }

  postFile(path: string, data: FormData): Observable<any> {
    // let headers = new HttpHeaders({ 'Content-Type': 'multipart/form-data '  });
    return this.http.post(`${environment.serverUrl}${path}`, data).pipe(catchError(this.formatErrors));
  }

  post(path: string, body: any): Observable<any> {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post(`${environment.serverUrl}${path}`, JSON.stringify(body), {headers}).pipe(catchError(this.formatErrors));
  }

  postParams(path: string, params: HttpParams): Observable<any> {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    const postbody = {};
    return this.http.post(`${environment.serverUrl}${path}`, postbody, {headers, params}).pipe(catchError(this.formatErrors));
  }

  delete(path: string, params: HttpParams): Observable<any> {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.delete(`${environment.serverUrl}${path}`, {headers, params}).pipe(catchError(this.formatErrors));
  }
}
