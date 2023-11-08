import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { environment as env } from 'src/environments/environment';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { 

  }
  private setURL(url: string): string {
    return env.API_URL + url;
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
    return throwError(()=>{
      error.error ? { ...error.error, statusText: error.statusText } : error
    }  
    );
  }

  public get(url: string): Promise<any> {
    return this.promiseResponse(this.http.get(this.setURL(url)));
  }

  public post(url: string, body: any = {}): Promise<any> {
    return this.promiseResponse(
      this.http.post(this.setURL(url), body)
    );
  }

  public patch(url: string, body: any = {}): Promise<any> {
    return this.promiseResponse(
      this.http.patch(this.setURL(url), body)
    );
  }
  public delete(url: string): Promise<any> {
    return this.promiseResponse(
      this.http.delete(this.setURL(url))
    );
  }

}
