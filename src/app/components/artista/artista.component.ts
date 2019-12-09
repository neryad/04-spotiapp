import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent implements OnInit {

  artista: any = {};
  topTracks: any[] =[];
  loading: boolean;

  constructor( private router: ActivatedRoute, private spotify: SpotifyService) {
    this.router.params.subscribe(params =>{
      // console.log(params['id']);
      this.getArtista(params['id']);
      this.getToTracks(params['id']);

    });
   }
   getArtista(id: string) {
    this.loading = true;
    this.spotify.getArtista(id).subscribe(artista => {
      console.log(artista);
      this.artista = artista;
      this.loading = false;
    });
   }

   getToTracks( id: string){
    this.spotify.getToTracks(id)
    .subscribe(topTracks =>{
      console.log(topTracks);
      this.topTracks = topTracks;

    });
   }

  ngOnInit() {
  }

}
