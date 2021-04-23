import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import {Data} from '../data';
import {RestServiceService} from '../rest-service.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    datas: Data[];

    constructor(private service: RestServiceService) { }

  ngOnInit() {
      this.service.getValues()
          .subscribe( data => {
              console.log(data)
              this.datas = data;
          }
      );


  }
}
