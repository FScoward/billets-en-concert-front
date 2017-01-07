import { Component, OnInit } from '@angular/core';
import { LiveRequest } from '../live'
import { RoutingServiceService } from '../routing-service.service'
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-live-form',
  templateUrl: './live-form.component.html',
  styleUrls: ['./live-form.component.css']
})
export class LiveFormComponent implements OnInit {

  constructor(
    private routingService: RoutingServiceService
  ) { }

  private liveRequest: LiveRequest

  ngOnInit() {
  }

  createLive(data: LiveRequest) {
    console.log('create live: ', data)
    this.routingService.createLive(data)
  }

  onSubmit(f: NgForm) {
    console.log('live form onSubmit')
    this.routingService.createLive(f.value)
  }

}
