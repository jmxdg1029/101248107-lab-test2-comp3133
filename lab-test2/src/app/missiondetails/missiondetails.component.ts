import { Component, Input, OnInit } from '@angular/core';
import { SpacexapiService } from '../spacexapi.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-missiondetails',
  templateUrl: './missiondetails.component.html',

  styleUrls: ['./missiondetails.component.css']
})
export class MissiondetailsComponent implements OnInit{
  missions;
  flight_number;
  constructor(private missionService: SpacexapiService, private route: ActivatedRoute) {}

  ngOnInit(){
     this.flight_number = this.route.snapshot.params['flight_number'];
      this.missions = this.missionService.getMission(this.flight_number)
  }
  
}
