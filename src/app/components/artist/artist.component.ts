import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { SpotifyService } from "../../services/spotify.service";

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent implements OnInit {

  artista: any = {};
  topTracks: any[] = [];

  constructor(private activatedRoute:ActivatedRoute, public _spotifyService:SpotifyService) {

   }

  ngOnInit() {

    //para recibir lo que mandamos por el parametro 
    this.activatedRoute.params 
        .map( params => params['id'])//map para solo obtener el id
        .subscribe( id =>{
          console.log(id);

          this._spotifyService.getArtista(id).subscribe( artista => {
            console.log(artista);
            this.artista = artista;
          });

          this._spotifyService.getTopTracks(id)
          .map( (canciones:any) => canciones['tracks'])
          .subscribe(topTracks => {
            console.log(topTracks);
            this.topTracks = topTracks;
          })
        });
  }

}
