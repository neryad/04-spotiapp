import { Component, OnInit } from "@angular/core";
import { SpotifyService } from "src/app/services/spotify.service";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styles: []
})
export class SearchComponent implements OnInit {
  artitas: any[] = [];
  loading: boolean;

  constructor(private spotify: SpotifyService) {}
  buscar(termino: string) {
    console.log(termino);
    this.loading = true;
    this.spotify.getArtistas(termino).subscribe((data: any) => {
      console.log(data, "data");
      this.artitas = data;
      this.loading = false;
      console.log(this.artitas, "aritas");
    });

  }

  ngOnInit() {}
}
