import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'], // Fix: Use 'styleUrls' instead of 'styleUrl'
})
export class TeamComponent implements OnInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      // Check if running in a browser environment before using window
      this.scrollToTop();
    }
  }

  scrollToTop() {
    window.scroll({ top: 0, behavior: 'smooth' });
  }
}
