import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  btn = {
    addBird: 'הוספת ציפור',
    addSpot: 'הוספת תצפית',
    addArea: 'הוספת איזור'
  };
  constructor(private router: Router) { }

  ngOnInit() {
  }
  addBird() {
    const url = 'home/addBird';
    this.router.navigate([url]);
  }
  addSpot() {
    const url = 'home/addSpot';
    this.router.navigate([url]);
  }
  addArea() {
    const url = 'home/addArea';
    this.router.navigate([url]);
  }

}
