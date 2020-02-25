import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
})
export class CallbackComponent implements OnInit {

  constructor(private auth: AuthService,
              private route: Router) { }

  ngOnInit() {
    this.auth.handleAuthCallback();

    if (window.location.href === `${window.location.origin}/AuthMaps/home`) {
      this.route.navigateByUrl(`${window.location.origin}/AuthMaps/`);
    }
    }
  }
