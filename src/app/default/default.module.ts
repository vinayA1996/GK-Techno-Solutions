import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { TeamComponent } from './team/team.component';
import { ButtonModule } from 'primeng/button';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { RippleModule } from 'primeng/ripple';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HomeComponent,
    ContactComponent,
    ServicesComponent,
    TeamComponent,
  ],
  imports: [
    CommonModule,
    ButtonModule,
    AnimateOnScrollModule,
    RippleModule,
    AvatarModule,
    AvatarGroupModule,
    RouterModule,
  ],
  exports: [HomeComponent],
})
export class DefaultModule {}
