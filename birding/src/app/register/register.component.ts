import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/service/user.service';
import { FormService } from './form.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  inputs = this.fs.inputs;
  rForm = this.fs.getForm();
  btn = {
    ok: 'הרשם',
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

  register() {
    console.log('register');
    const newUser = this.rForm.value;

    const requestToServer = this.service.register(newUser);

    // Call the Http Request
    requestToServer.subscribe(res => {
      console.log('id of the new user:', res);
      if (res !== -1) {
        console.log('register success');
        const user = { username: this.rForm.controls.email.value, password: this.rForm.controls.password.value };
        const requestToServerAfterRegister = this.service.login(user);
        requestToServerAfterRegister.subscribe(res2 => {
          if (res2) {
            this.service.setUser(res2);
          } else {
            this.msgError = 'פרטים שגויים.  נסה שנית';
          }
        });
      } else {
        this.msgError = 'ההרשמה נכשלה.  נסה שנית';
      }

    });

  }
}
