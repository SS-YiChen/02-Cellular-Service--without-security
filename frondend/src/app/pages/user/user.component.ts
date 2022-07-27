import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/class/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  template: `
  <nz-table #basicTable [nzData]="listOfData">
    <thead>
      <tr>
        <th>Name</th>
        <th>Age</th>
        <th>Address</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      <tr *ngFor="let data of basicTable.data">
        <td>{{ data.name }}</td>
        <td>{{ data.age }}</td>
        <td>{{ data.address }}</td>
        <td>
          <a>Action 一 {{ data.name }}</a>
          <nz-divider nzType="vertical"></nz-divider>
          <a>Delete</a>
        </td>
      </tr>
    </tbody>
  </nz-table>
`
})
export class UserComponent implements OnInit {

  users: User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  private getUsers() {
    this.userService.getDeviceList().subscribe(data =>{
      this.users=data;
    })
  }

  deleteUser (id:number){
    console.log(id)
  } 

  updateUser(id: number){

  }

  viewUser(id: number){

  }

}
