import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrl: './team.component.scss',
})
export class TeamComponent implements OnInit{
  ngOnInit(): void {
    
    this.scrollToTop();
  }
  scrollToTop() {
    window.scroll({ top: 0, behavior: 'smooth' });
  }
}
