import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  currentUrl : string = "";

  constructor(private router : Router) {
    this.router.events.subscribe((event) => {
      if( event instanceof NavigationEnd ) {
        this.currentUrl = event.url;
      }
    });
  }

  goHome() : void {
    this.router.navigate(['']);
  }

  goSubscribe() : void {
    this.router.navigate(['subscribe']);
  }
}
