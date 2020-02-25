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

                console.log(window.location.origin, window.location.host, window.location.hostname, window.location.search);
   }

   ngOnInit() {

     if (this.cookies.check('auth0.is.authenticated')) {
      this.route.navigate(['/mapa']);
    } else {
      return;
    }
   }
  }
