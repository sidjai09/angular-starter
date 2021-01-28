import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  onLogin(loginForm: NgForm): void {
    const user = {email: loginForm.form.value.email, password: loginForm.form.value.password};
    console.log('login button clicked', user);

    this.authService.setLogin(user).subscribe((success: any) => {
      console.log('Login success', success);
    });
  }
}
