import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

import { DataService } from './../../../data.service';
import { User } from './user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  userList: User[];
  filteredUserList: User[];
  userType: string = 'All';
  activeCount: number;
  deactiveCount: number;

  constructor(private dataService: DataService) {}

  filterUserList() {
    if (this.userList && this.userList.length) {
      this.filteredUserList = this.userList.filter((user) => {
        switch (this.userType) {
          case 'Deactivated':
            return user.status.toLowerCase() === 'deactivated';
          case 'Active':
            return user.status.toLowerCase() === 'active';
          default:
            return true;
        }
      });
    }
  }

  ngOnInit() {
    // this.dataService.storeData();
    this.dataService
      .getData('https://ng-cyble-assignment.firebaseio.com/users.json')
      .pipe(
        map((response: any) =>
          response.map((user) => {
            return {
              id: user.ID.trim(),
              name: user.Name.trim(),
              status: user.status.trim(),
            };
          })
        )
      )
      .subscribe((userResponse: User[]) => {
        this.userList = userResponse;
        this.activeCount = this.userList.filter(
          (user) => user.status.toLowerCase() === 'active'
        ).length;
        this.deactiveCount = this.userList.length - this.activeCount;
        this.filterUserList();
      });
  }
}
