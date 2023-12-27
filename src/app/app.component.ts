import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DefaultModule } from './default/default.module';
import { RouterLink } from '@angular/router';
import { RouterModule } from '@angular/router';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Meta } from '@angular/platform-browser';

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
  navbarColor: string = '#000000';
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private meta: Meta
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
      }
    });
    this.meta.updateTag({
      name: 'title',
      content: 'GK Techno Solutions - Innovative Ventures',
    });
    this.meta.updateTag({
      name: 'description',
      content:
        'Explore a diverse portfolio of innovative ventures at GK Techno Solutions.',
    });
    this.meta.updateTag({
      name: 'keywords',
      content:
        'GK Music,GK Dukkan,Spring Hotel,Multifaceted ventures,E-commerce ventures',
    });
    this.meta.updateTag({ name: 'author', content: 'Ashish Malviya' });
  }
}
