import { Component, OnInit } from '@angular/core';
import { BirdService } from 'src/service/bird.service';
import { FormService } from './form.service';

@Component({
  selector: 'app-add-area',
  templateUrl: './add-area.component.html',
  styleUrls: ['./add-area.component.scss']
})
export class AddAreaComponent implements OnInit {

  inputs = this.fs.inputs;
  rForm = this.fs.getForm();
  btn = {
    ok: 'הוספה',
    cancel: 'ביטול'
  };
  msgError: string;
  constructor(private fs: FormService, private service: BirdService) { }

  ngOnInit() {
  }
  add() {
    const area = { name: this.rForm.controls.name.value, img: this.rForm.controls.img.value };
    const requestToServer = this.service.addArea(area);

    // Call the Http Request
    requestToServer.subscribe(res => {
      console.log('id of area', res);
      if (res) {
        console.log('add area success');
        this.service.navToBirdList();
      } else {
        console.log('add area failed');
      }

    });
  }
  cancel() {
    this.rForm.reset();
  }
}
