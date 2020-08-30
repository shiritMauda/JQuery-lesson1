import { Component, OnInit } from '@angular/core';
import { ReplaySubject, Observable } from 'rxjs';
import { BirdService } from 'src/service/bird.service';
import { IBird } from 'src/models/bird.model';

@Component({
  selector: 'app-bird-list',
  templateUrl: './bird-list.component.html',
  styleUrls: ['./bird-list.component.scss']
})
export class BirdListComponent implements OnInit {

  private _birds$ = new ReplaySubject<IBird[]>(1);

  constructor(private service: BirdService) { }
  public get birds$(): Observable<IBird[]> {
    return this._birds$.asObservable();
  }
  ngOnInit() {
    this.getData();
  }

  getData() {

    const requestToServer = this.service.getListOfbirds();

    // Call the Http Request
    requestToServer.subscribe(res => {
      console.log('birds from server', res);
      this._birds$.next(res);

    });
  }

}

