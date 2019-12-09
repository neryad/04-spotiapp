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
      'Authorization' :'Bearer BQC5fziHZbDFymIfa-6-QKUDZ3BLTZJx_kINU2V7UwUIdiO5IVi8e_8ItkQzXx31FTHICES9sTE1aXxrb1k'});
    return this.http.get(url,{headers});
    };

  getNewRelease() {

    return this.getQuery('browse/new-releases?limit=20')
    .pipe( map( data =>{
      return data['albums'].items;
    }));

  }

  getArtistas( termino: string ) {

    return this.getQuery(`search?q=${ termino }&type=artist&limit=15`)
    .pipe( map (data =>{
      return data['artists'].items;
    }));
  }

  getArtista( id: string ) {

    return this.getQuery(`artists/${id}`);
    // .pipe( map (data =>{
    //   return data['artists'].items;
    // }));
  }

  getToTracks( id: string ) {

    return this.getQuery(`artists/${id}/top-tracks?country=us`)
     .pipe( map (data => {
       return data['tracks'];
     }));
  }
}
