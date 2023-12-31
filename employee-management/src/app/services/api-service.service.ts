import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { 

  }
  private setURL(url: string): string {
    return environment.API_URL + url;
  }

  private promiseResponse(res: Observable<any>): Promise<any> {
    return new Promise((resolve, reject) => {
      res.pipe(catchError(this.handleError)).subscribe({
        next: (data: any) => resolve(data),
        error: (err: any) => reject(err),
      });
    });
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    const errorMessage = error.error ? { ...error.error, statusText: error.statusText } : error;
    return throwError(()=>errorMessage);
  }

  public get(url: string): Promise<any> {
    return this.promiseResponse(this.http.get(this.setURL(url)));
  }

  public post(url: string, body: any = {}): Promise<any> {
    return this.promiseResponse(
      this.http.post(this.setURL(url), body)
    );
  }

  public put(url: string, body: any = {}): Promise<any> {
    return this.promiseResponse(
      this.http.put(this.setURL(url), body)
    );
  }
  public delete(url: string): Promise<any> {
    return this.promiseResponse(
      this.http.delete(this.setURL(url))
    );
  }

}
