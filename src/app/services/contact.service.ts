import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private api = 'https://mailthis.to/kktsmodise7@gmail.com'

  constructor(private http: HttpClient) { }

  PostMessage(input: any) {
    return this.http.post(this.api, input, { responseType: 'text' }).pipe(
      map(
        (res) =>{
          if (res){
            return res;
          }
        },
        (error: any) => {
          return error;
        }
      )
    )
}
}
