import { Injectable } from '@angular/core';
import { Http, Request, Response } from '@angular/http';
import { LiveRequest } from './live'
import { Artist } from './artist'
import { Observable } from 'rxjs/Observable';

const BASE_PATH = "http://localhost:9000"

@Injectable()
export class RoutingServiceService {

  constructor(
    private http: Http
  ) {}

  public artists: Array<Artist>

  fetchArtists(): Observable<Artist[]> {
    /*
    this.http.get(`${BASE_PATH}/artist`).subscribe(
      (res: Response) => {
        this.artists = res.json() as Array<Artist>
        this.artists.map(a => console.log('------------', a.id, a.name))
      },
      (error: any) => console.log(error)
    )
    */
    return this.http.get(`${BASE_PATH}/artist`).map(response => response.json() as Artist[])
  }

  createArtist(data: any): any {
    console.log('createArtist')
    this.http.post(`${BASE_PATH}/artist`, data).subscribe(
      (res: Response) => console.log(res.status, res.json()),
      (error: any) => console.log(error)
    )
  }

  createLive(data: LiveRequest) {
    console.log(data);
    this.http.post(`${BASE_PATH}/live`, data).subscribe(
      (res: Response) => console.log(res.json()),
      (error: any) => console.log(error)
    )
  }

}
