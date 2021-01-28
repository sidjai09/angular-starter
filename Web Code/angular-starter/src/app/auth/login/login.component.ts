import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {AuthService} from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  countryList: any[] = [];

  constructor(private authService: AuthService, private activatedRoute: ActivatedRoute) {
    console.log('###Login Constructor Called');

    this.activatedRoute.data.subscribe(
      (success) => {
        console.log('Resolver success', success);

        if (!!success.countryList) {
          if (success.countryList.statusMsg === 'success') {
            console.log(success.countryList.data);

            this.countryList = success.countryList.data.country;
          }
        }
      },
      (error) => {
        console.error('Error in resolver', error);
      }
    );
  }

  ngOnInit(): void {
    console.log('###Login ngOnInit Called');
    // this.getCountry();
  }

  onLogin(loginForm: NgForm): void {
    const user = {email: loginForm.form.value.email, password: loginForm.form.value.password};
    console.log('login button clicked', user);

    this.authService.setLogin(user).subscribe((success: any) => {
      console.log('Login success', success);
    });
  }

  // getCountry(): void {
  //   this.authService.getCountrys().subscribe(
  //     (success: any) => {
  //       this.countryList = success.data.country;
  //     },
  //     (error: any) => {
  //       console.error(error);
  //     }
  //   );
  // }
}
