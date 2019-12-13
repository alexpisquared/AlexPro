import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'alex-pro';

  constructor(
    // @Inject(DOCUMENT) private document: Document,
    private router: Router
  ) {
    // this.isSignedIn = false;
  }
}
