import { Component } from '@angular/core';
import { MaterialModule } from '../../material.module';
import { ActivatedRoute, NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MaterialModule,RouterModule,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  pageTitle = '';

  constructor(
    public router:Router,
    private activatedRoute : ActivatedRoute,
    private authService:AuthService
  ){}
 
  ngOnInit() {
    // Set the page title on initial load
    this.setPageTitle(this.activatedRoute);

    // Update the title on every route change
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => {
          let route = this.activatedRoute;
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route.snapshot.data['title'] || 'home'; 
        })
      )
      .subscribe((title: string) => {
        this.pageTitle = title;
      });
  }

  private setPageTitle(route: ActivatedRoute) {
    let activeRoute = route;
    while (activeRoute.firstChild) {
      activeRoute = activeRoute.firstChild;
    }
    this.pageTitle = activeRoute.snapshot.data['title'] || 'home';
  }

  logout(){
     this.authService.logOut();
  }
}

