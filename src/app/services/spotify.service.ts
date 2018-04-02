import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  constructor(public http:HttpClient) {
    console.log("Servicio de Spotify listo")
  }

  artistas: any[] = [];
  urlSpotify:string = 'https://api.spotify.com/v1/';
  token: string = 'BQCwGlNRuE7a4LWrY95f2vdX4Jsv9Q_RgxIzGVr-iP3DR6WBHcIx8E8DR15C9C7u6v2G2xT85KYQrW3N8d4';


  private getHeaders(): HttpHeaders{
    let headers = new HttpHeaders({
      'Authorization': 'Bearer '+ this.token
    });
    return headers;
  }

  getArtistas(termino:string){
    let url = `${this.urlSpotify}search?query=${termino}&type=artist&offset=0&limit=20`;

    let headers = this.getHeaders();

    return this.http.get(url, { headers })
              .map( (resp:any) =>{
                this.artistas = resp.artists.items;
                return this.artistas;
              });
  }


  getArtista(id:string){
    let url = `${this.urlSpotify}artists/${id}`;

    let headers = this.getHeaders();

    return this.http.get(url, { headers }); /*
              .map( (resp:any) =>{
                this.artistas = resp.artists.items;
                return this.artistas;
              });*/
  }


  getTopTracks(id:string){
    let url = `${this.urlSpotify}artists/${id}/top-tracks?country=US`;

    let headers = this.getHeaders();

    return this.http.get(url, { headers }); 
  }



}
