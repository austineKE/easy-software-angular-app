import { Component, OnInit } from '@angular/core';
import {User} from '../user';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  user: User = new User('', '', '', 0, 0, '', '');
  message: any;

  constructor() { }

  ngOnInit(): void {
  }

}
