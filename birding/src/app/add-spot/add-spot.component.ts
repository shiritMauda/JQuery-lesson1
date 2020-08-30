import { Component, OnInit, Input } from '@angular/core';
import { BirdService } from 'src/service/bird.service';
import { FormService } from './form.service';
import { IBird } from 'src/models/bird.model';
import { ActivatedRoute } from '@angular/router';
import { IArea } from 'src/models/area.model';
import { ReplaySubject, Observable } from 'rxjs';
import { UserService } from 'src/service/user.service';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-add-spot',
  templateUrl: './add-spot.component.html',
  styleUrls: ['./add-spot.component.scss']
})
export class AddSpotComponent implements OnInit {
  bird: IBird;
  birdName: string;
  area: number;
  inputs = this.fs.inputs;
  rForm = this.fs.getForm();
  private _areas$ = new ReplaySubject<IArea[]>(1);
  btn = {
    ok: 'הוספה',
    cancel: 'ביטול'
  };
  label = {
    area: 'בחר אזור'
  };
  public get email$(): Observable<string> {
    return this.user.userIn$
      .pipe(
        filter(u => !!u),
        map(u => u.email)
      );
  }
  public get areas$(): Observable<IArea[]> {
    return this._areas$.asObservable();
  }
  msgError: string;
  constructor(private fs: FormService, private service: BirdService, private route: ActivatedRoute, private user: UserService) { }

  ngOnInit() {
    this.birdName = this.route.snapshot.paramMap.get('name');
    this.rForm.controls.bird_name.setValue(this.birdName);
    this.getData();
  }
  getData() {

    const requestToServer = this.service.getAllAreas();

    // Call the Http Request
    requestToServer.subscribe(res => {
      console.log('Areas from server', res);
      this._areas$.next(res);

    });
  }
  add() {

    const area_idx = this.area;
    const bird_idx = this.route.snapshot.paramMap.get('id');
    const spot_datex = this.rForm.controls.spot_date.value;
    const newSpot = {
      area_id: area_idx, bird_id: bird_idx, spot_date: spot_datex, email: 'shirit@eprsys.co.il'
    };
    const requestToServer = this.service.addSpot(newSpot);

    // Call the Http Request
    requestToServer.subscribe(res => {
      console.log('id of spot', res);
      if (res) {
        console.log('add spot success');
        this.service.navToBirdList();
      } else {
        console.log('add spot failed');
      }

    });
  }
  cancel() {
    this.rForm.reset();
  }
}
