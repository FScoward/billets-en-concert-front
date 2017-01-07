import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RoutingServiceService } from './../routing-service.service';
import { Artist } from '../artist'

@Component({
  selector: 'app-artist-form',
  templateUrl: './artist-form.component.html',
  styleUrls: ['./artist-form.component.css']
})
export class ArtistFormComponent implements OnInit {

  public artists: Array<Artist>
  public filteredList: Artist[] = []
  public query: string = ''

  constructor(
    private routingService: RoutingServiceService
  ) {
  }

  ngOnInit() {
    this.routingService.fetchArtists().subscribe(
      (res: Artist[]) => this.artists = res,
      (error: any) => this.artists
    )
  }

  onSubmit(f: NgForm) {
    console.log('----------------', f.value)
    this.routingService.createArtist(f.value)
  }

  filter(name: string) {
    console.log('query: ' ,name)
    if(name !== '' && name !== 'undefined') {
      let lowerName = name.toLowerCase()
      this.filteredList = this.artists.filter(a => a.name.toLowerCase().indexOf(lowerName) > -1)
      console.log(this.filteredList)
    } else {
      this.filteredList = []
    }
  }

  select(item: Artist) {
    this.query = item.name
    this.filteredList = []
  }

}
