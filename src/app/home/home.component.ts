import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID, Inject } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule,RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {

particles = Array.from({ length: 50 }, () => ({
  top: Math.random() * 100 + 'vh',
  left: Math.random() * 100 + 'vw',
  animation: `float${Math.floor(Math.random() * 4) + 1}` // float1 to float4
}));

constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  showVideo = false;

  roles = [
    'Senior Analyst @Capgemini',
    'Software Engineer',
    'Web Developer',
    'Full Stack Developer',
    'Frontend Developer',
    'Backend Developer',
    'App Designer',
    'UI/UX Designer',
    'Tech Explorer'
  ];

  ngAfterViewInit(): void {
  if (isPlatformBrowser(this.platformId)) {
    this.startTypewriter(); 
  }
}
  
 startTypewriter() {
  const element = document.querySelector('.typewriter-text') as HTMLElement;
  if (!element) return;

  let index = 0;
  let charIndex = 0;
  let currentRole = '';
  let isDeleting = false;

  const type = () => {
    if (index >= this.roles.length) index = 0;
    currentRole = this.roles[index];

    if (isDeleting) {
      charIndex = Math.max(0, charIndex - 1);
      element.textContent = currentRole.substring(0, charIndex);
    } else {
      charIndex = Math.min(currentRole.length, charIndex + 1);
      element.textContent = currentRole.substring(0, charIndex);
    }

    if (!isDeleting && charIndex === currentRole.length) {
      isDeleting = true;
      setTimeout(type, 1000);
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      index++;
      setTimeout(type, 500);
    } else {
      setTimeout(type, isDeleting ? 50 : 100);
    }
  };

  type();
}


openVideoPopup() {
    this.showVideo = true;
  }

  closeVideoPopup() {
    this.showVideo = false;
  }

}
