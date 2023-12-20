import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DefaultModule } from './default/default.module';
import { RouterLink } from '@angular/router';
import { RouterModule } from '@angular/router';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NgbModule,
    DefaultModule,
    RouterLink,
    RouterModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'gkTechnoSolutions';
  navbarColor: string = '#e1aa7f';
  constructor(private router: Router, private route: ActivatedRoute) {
    // Subscribe to router events to detect route changes
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Update the navbar color based on the current route
        this.updateNavbarColor();
      }
    });
  }
  updateNavbarColor() {
    // Get the current route from the ActivatedRoute
    const currentRoute = this.route.root.firstChild.snapshot.url[0]?.path;

    // Set the background color based on the current route
    switch (currentRoute) {
      case 'home':
        this.navbarColor = '#ffffff'; // Set the color for the home route
        break;
      case 'services':
        this.navbarColor = '#ffffff'; // Set the color for the services route
        break;
      case 'team':
        this.navbarColor = '#ffffff'; // Set the color for the services route
        break;
      case 'team':
        this.navbarColor = '#f2f2f2c2'; // Set the color for the services route
        break;
      // Add cases for other routes as needed
      default:
        this.navbarColor = '#f2f2f2'; // Default color
        break;
    }
  }
}
