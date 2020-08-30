import { Component, OnInit } from '@angular/core';
import { FormService } from './form.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/service/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  inputs = this.fs.inputs;
  rForm = this.fs.getForm();
  btn = {
    ok: 'כניסה',
    cancel: 'ביטול'
  };
  label = {
    register: 'עוד לא רשום? הרשם כאן'
  };
  msgError: string;
  constructor(private fs: FormService, private service: UserService) { }

  ngOnInit() {
  }

  cancel() {
    this.rForm.reset();
  }

  login() {
    console.log('login');
    const user = { username: this.rForm.controls.email.value, password: this.rForm.controls.password.value };
    const requestToServer = this.service.login(user);

    // Call the Http Request
    requestToServer.subscribe(res => {
      console.log('User from server', res);
      if (res) {
        this.service.setUser(res);
      } else {
        this.msgError = 'פרטים שגויים.  נסה שנית';
      }

    });

  }
}
