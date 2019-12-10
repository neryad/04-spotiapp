import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  nuevasCanciones: any[] = [];
  loading: boolean;
  error: boolean;
  mensajeError: string;
  constructor(private spotify: SpotifyService) {
    this.loading = true;
    this.error = false;
    this.spotify.getNewRelease()
    .subscribe( (data: any ) => {
      this.nuevasCanciones = data;
      this.loading = false;
    },(errorServicios) => {
      this.loading = false;
      this.error = true;
      this.mensajeError = errorServicios.error.error.message;
      console.log(errorServicios.error.error.message);

    });
  }

  ngOnInit() {}
}
