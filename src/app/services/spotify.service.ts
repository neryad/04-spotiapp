import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getNewRelease() {
    const headers = new HttpHeaders({
      'Authorization' :'Bearer BQCCzO04jLVhhOt8Si32NHJ3GSb4qammhEbTN9SYSIXdJo7itn9hANOP_VOwFxArqwVWudcD3z3qid6niyLJGMtltlvXyLDaPGyHpn8f84ljL3wZWeFaodps_q3R9P8nC6xoCtkL'
    });
    return this.http.get('https://api.spotify.com/v1/browse/new-releases',{headers});

  }
}
