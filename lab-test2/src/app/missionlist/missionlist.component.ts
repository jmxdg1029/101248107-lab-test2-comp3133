import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router'
import { SpacexapiService } from '../spacexapi.service';

import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  
  styleUrls: ['./missionlist.component.css']
})
export class MissionlistComponent implements OnInit {

  missionlists;
  
  constructor(private http: HttpClient, private router: Router, private mission: SpacexapiService){this.loadPosts()}
  posts: any[] = [];
  
  loadPosts(){
    this.http
    .get('https://api.spacexdata.com/v3/launches')
    .subscribe((posts: any) => {
      this.posts = posts;
     
    });
  }

  ngOnInit(): void {
  }


}
