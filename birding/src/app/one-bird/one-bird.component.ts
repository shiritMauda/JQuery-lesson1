import { Component, OnInit, Input } from '@angular/core';
import { IBird } from 'src/models/bird.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-one-bird',
  templateUrl: './one-bird.component.html',
  styleUrls: ['./one-bird.component.scss']
})
export class OneBirdComponent implements OnInit {
  @Input() bird: IBird;
  constructor(private router: Router) { }

  ngOnInit() {
  }
  addSpot(birdSpot) {
    const url = 'home/addSpot';
    this.router.navigate([url, birdSpot]);
  }
}
