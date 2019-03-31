import { AfterViewInit, Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit, OnDestroy {
  appTitle = 'Alex Pro';
  titleTla = 'API';
  userName = '[Entered user name]';
  isLoading: boolean; // used for showing Loading spinner during transition between pages
  isLoggingToServer: boolean;
  private subscription: Subscription;
  private themeKey = 'themeKey';
  private mainTheme = 'main-theme';
  private darkTheme = 'dark-theme';
  themedIcon = './assets/AlexTiny_LinkedIn.png';
  isSignedIn = false;

  get themeVal(): string {
    let returnValue = localStorage.getItem(this.themeKey);
    if (returnValue === null || returnValue.length < 4) {
      returnValue = this.darkTheme;
    }
    return returnValue;
  }
  set themeVal(theme: string) {
    if (!(theme === null || theme.length < 4)) {
      localStorage.setItem(this.themeKey, theme);
    }
    console.log(` ** theme just set to : ${localStorage.getItem(this.themeKey)}`);
  }

  constructor(@Inject(DOCUMENT) private document: Document, private router: Router) {
    // this.isSignedIn = false;
  }

  ngOnInit() {
    this.setThemeToStoredValue();
  }
  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  signIn(): void {
    this.isSignedIn = true;
    setTimeout(() => {
      this.router.navigate(['/']);
    }, 3333);
  }
  signOut(): void {
    this.isSignedIn = false;
    this.router.navigate(['/']);
  }

  toggleTheme() {
    if (this.document.body.classList.contains(this.mainTheme)) {
      this.document.body.classList.remove(this.mainTheme);
      this.document.body.classList.add((this.themeVal = this.darkTheme));
      this.themedIcon = './assets/images/ChsLogo_Dark.png';
    } else {
      this.document.body.classList.remove(this.darkTheme);
      this.document.body.classList.add((this.themeVal = this.mainTheme));
      this.themedIcon = './assets/images/ChsLogo_Lite.png';
    }
    console.log(` ** theme toggled  to   ${this.themeVal}`);
  }
  setThemeToStoredValue() {
    console.log(` ** setting to store    ${this.themeVal}`);

    if (this.document.body.classList.contains(this.mainTheme)) {
      this.document.body.classList.remove(this.mainTheme);
    } else if (this.document.body.classList.contains(this.darkTheme)) {
      this.document.body.classList.remove(this.darkTheme);
    }

    this.document.body.classList.add(this.themeVal);

    this.themedIcon = this.themeVal === this.mainTheme ? './assets/images/ChsLogo_Lite.png' : './assets/images/ChsLogo_Dark.png';
  }
}
