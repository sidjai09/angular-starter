import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  countryList: any[] = [];

  constructor(private authService: AuthService) {
    console.log('###Login Constructor Called');
  }

  ngOnInit(): void {
    console.log('###Login ngOnInit Called');
    this.getCountry();
  }

  onLogin(loginForm: NgForm): void {
    const user = {email: loginForm.form.value.email, password: loginForm.form.value.password};
    console.log('login button clicked', user);

    this.authService.setLogin(user).subscribe((success: any) => {
      console.log('Login success', success);
    });
  }

  getCountry(): void {
    this.authService.getCountrys().subscribe(
      (success: any) => {
        this.countryList = success.data.country;
      },
      (error: any) => {
        console.error(error);
      }
    );
  }
}
