import { Component, OnInit } from '@angular/core';
import {RegistrationService} from '../user-services/registration.service';
import {User} from '../user';
import {Data} from '../data';
import {RestServiceService} from '../rest-service.service';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {
  datas: Data;

  constructor(private service: RegistrationService, private restService: RestServiceService) { }

  ngOnInit() {
      this.restService.loadEmployes('1')
          .subscribe( data => {
              console.log(data);
              this.datas = data;
          });

  }

}
