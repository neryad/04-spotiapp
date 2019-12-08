import { Component, OnInit } from "@angular/core";
import { SpotifyService } from "src/app/services/spotify.service";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styles: []
})
export class SearchComponent implements OnInit {
  artitas: any[] = [];

  constructor(private spotify: SpotifyService) {}
  buscar(termino: string) {
    console.log(termino);
    this.spotify.getArtista(termino).subscribe((data: any) => {
      console.log(data, "data");
      this.artitas = data;

      console.log(this.artitas, "aritas");
    });
  }

  ngOnInit() {}
}
