import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'], // Fix: Use 'styleUrls' instead of 'styleUrl'
})
export class TeamComponent implements OnInit {
  ngOnInit(): void {
    this.scrollToTop();
  }

  scrollToTop() {
    window.scroll({ top: 0, behavior: 'smooth' });
  }
  xc;
}
