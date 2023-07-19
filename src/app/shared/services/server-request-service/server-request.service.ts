import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServerRequestService {

// baseUrl = "http://127.0.0.1:8000/"
baseUrl = "https://nathanielwobin.pythonanywhere.com/"



 constructor(private http: HttpClient) { }


    ngOnInit(){

    }

    post(url:string, body:object):Observable<any>{
      return this.http.post(this.baseUrl + url, body)
    }

    get(url:string):Observable<any>{
      return this.http.get(this.baseUrl + url)
    }


    put(url:string, body:object):Observable<any>{
      return this.http.put(this.baseUrl + url, body)
    }

    delete(url:string):Observable<any>{
      return this.http.delete(this.baseUrl + url)
    }

    processResponse(response:any){
      if (response.errorStatus != false){
        return false;
      }
      else {
        return response.contentData;
      }
    }
}
