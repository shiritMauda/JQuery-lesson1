import { Component, OnInit } from '@angular/core';
import { FormService } from '../add-bird/form.service';
import { BirdService } from 'src/service/bird.service';

@Component({
  selector: 'app-add-bird',
  templateUrl: './add-bird.component.html',
  styleUrls: ['./add-bird.component.scss']
})
export class AddBirdComponent implements OnInit {
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
    const bird = { name: this.rForm.controls.name.value, img: this.rForm.controls.img.value };
    const requestToServer = this.service.addBird(bird);

    // Call the Http Request
    requestToServer.subscribe(res => {
      console.log('id of bird', res);
      if (res) {
        console.log('add bird success');
        this.service.navToBirdList();
      } else {
        console.log('add bird failed');
      }

    });
  }
  cancel() {
    this.rForm.reset();
  }
}
