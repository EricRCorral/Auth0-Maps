import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  constructor(public auth: AuthService,
              public route: Router,
              public cookies: CookieService ) {

                if (cookies.check('auth0.is.authenticated') === true) {
                  this.route.navigate(['mapa']);
                }
   }

   ngOnInit() {
    }
   }
