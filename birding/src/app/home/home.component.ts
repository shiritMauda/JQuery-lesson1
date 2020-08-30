import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/service/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private service: UserService) { }

  ngOnInit() {
console.log('ngOnInit Home');

    if (this.service.isConnected$) {

    } else {
      this.service.navToLogin();
    }

  }

}
