
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {User} from '../user.profile.module';
import {UserService} from '../user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  // styleUrls: ['./user-detail.component.css']
  styles: [`
  .box {
    border: 1px solid #007EC5;
    border-radius: 10px;
    margin-bottom: 15px;
    padding: 10px 30px;
  }`]
})
export class UserDetailComponent implements OnInit {
  user: User;
  id: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private userDataService: UserService) { }
  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = params.id;
      this.userDataService.getUser(this.id).subscribe(
        res => {
          this.user = res[0];
        }
      );
    });
  }
}
