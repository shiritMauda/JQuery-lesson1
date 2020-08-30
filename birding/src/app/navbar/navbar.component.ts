import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/service/user.service';
import { Observable } from 'rxjs';
import { IUser } from 'src/models/user.model';
import { filter, map } from 'rxjs/operators';
export interface INav {
  path: string;
  label: string;
}
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  navs: INav[] = [
    { path: 'birdList', label: 'כל הציפורים' },


  ];
  title = {
    title: 'ברוכים הבאים'
  };
  public get userIn$(): Observable<IUser> {
    return this.service.userIn$;
  }
  public get username$(): Observable<string> {
    return this.service.userIn$
      .pipe(
        filter(u => !!u),
        map(u => u.first_name)
      );
  }
  constructor(private service: UserService) { }

  ngOnInit() {
  }

  navbarOpen = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }






}


