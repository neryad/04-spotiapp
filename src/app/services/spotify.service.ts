import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }
    getQuery( query:string ){

      const url = `https://api.spotify.com/v1/${query}`;
        const headers = new HttpHeaders({
      'Authorization' :'Bearer BQCSO3GSSye-FEtCbO-gOtGJOIoj9g37JrZJ5I4Lirp-OQVqlFn8M1l1-VXrVH-6wTD2HJA5rtxV6M_2Cpw'});
    return this.http.get(url,{headers});
    };

  getNewRelease() {

    return this.getQuery('browse/new-releases?limit=20')
    .pipe( map( data =>{
      return data['albums'].items;
    }));

  }

  getArtista( termino: string ) {

    return this.getQuery(`search?q=${ termino }&type=artist&limit=15`)
    .pipe( map (data =>{
      return data['artists'].items;
    }));
  }
}
