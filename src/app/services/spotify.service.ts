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
      'Authorization' :'Bearer BQDlULHFrh6YGcX-bVuvaZiroMGOPTYyOXlun6ToEL-iOpi9ggZpLXul3TN7R8BpIaYnupKIUQXcyuux2_0'});
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
