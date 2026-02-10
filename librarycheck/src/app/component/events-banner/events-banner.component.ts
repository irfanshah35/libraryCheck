import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-events-banner',
  standalone: true,
  imports: [NgIf],
  templateUrl: './events-banner.component.html',
  styleUrl: './events-banner.component.css'
})
export class EventsBannerComponent {
   @Input() isDesktop!: boolean;
  @Input() isTabDesk!: boolean;
  @Input() sportId!: string;

}
