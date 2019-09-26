import { Component, OnInit } from '@angular/core';
import {User} from '../user.profile.module';
import {UserService} from '../user.service';
import {ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  users: User[] = [];
  user: User;

  constructor(private userDataService: UserService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
     this.userDataService.getUsers()
       .subscribe(res => {
         this.users = res;
         console.log(this.users);
       });
  }

  Details(i: number) {
    const id = this.users[i].id.value;
    this.router.navigate( [id], {relativeTo: this.route});

  }

}
