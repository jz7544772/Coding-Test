import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class JustEatService {

  private readonly host:string = 'https://public.je-apis.com';

  private headers:Headers = new Headers({
    'Accept-Tenant': 'uk', 
    'Accept-Language': 'en-GB', 
    'Authorization': 'Basic VGVjaFRlc3RBUEk6dXNlcjI='
  });

  constructor(private http:Http) {}

  buildURL(namespace:string, queryParams:Object = {}):string {
    let url:string = `${this.host}/${namespace}`;
    
    if(Object.keys(queryParams).length > 0) {
      url += '?';
      
      for(let key in queryParams) {
        url += `${key}=${queryParams[key]}&`;
      }
      url = url.replace(/&$/, '');
    }  

    return url;
  } 

  getRestaurantsByOutcode(outcode:String):Promise<any> {
    const url:string = this.buildURL('restaurants', { q: outcode });
    return this.http.get(url, {headers: this.headers}).toPromise();
  }

}
