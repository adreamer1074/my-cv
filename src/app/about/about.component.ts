import { Component, HostListener,ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  encapsulation: ViewEncapsulation.None, // グローバルに適用
})
export class AboutComponent {
  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    const animatedImages = document.querySelectorAll('.animated-image');
    animatedImages.forEach((image) => {
      const rect = image.getBoundingClientRect();
      if (rect.top <= window.innerHeight * 0.75) {
        image.classList.add('appear');
      }
    });
  }
}
