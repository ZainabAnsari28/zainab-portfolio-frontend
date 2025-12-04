import { Component } from '@angular/core';
import { MatCardContent, MatCardTitle } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-services',
  imports: [CommonModule, MatCardContent, MatCardTitle, MatIconModule, MatCardModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})

export class ServicesComponent {
  services = [
    {
      icon: 'developer_mode',
      title: 'Full-Stack Web Development',
      tagline: 'Build scalable, end-to-end web applications',
      description: 'From frontend to backend, I deliver complete solutions tailored to your business goals,  Angular + Spring Boot integration MySQL database design Responsive, secure, and fast apps'
    },
    {
      icon: 'cloud_sync',
      title: 'RESTful API Development',
      tagline: 'Robust APIs for seamless data exchange',
      description: 'I design and develop secure, scalable APIs for modern web and mobile apps.Spring Boot REST APIs Postman-tested endpoints Swagger/OpenAPI documentation'
    },
    {
      icon: 'design_services',
      title: 'Responsive UI/UX Design',
      tagline: 'User-first design with modern frameworks.',
      description: 'I create clean, intuitive interfaces that work beautifully across all devices. Angular Material & Bootstrap Mobile-first responsive layouts Pixel-perfect implementation'
    },
    {
      icon: 'layers',
      title: 'Microservices Architecture',
      tagline: 'Scalable systems with independent services.',
      description: 'I build modular applications using microservices for better performance and maintainability.Spring Cloud & Eureka API Gateway integration Docker-ready services'
    },
    {
      icon: 'code',
      title: 'Frontend Development',
      tagline: 'Interactive, dynamic, and fast frontends.',
      description: 'I specialize in building engaging UIs using modern JavaScript technologies. Angular + TypeScript Component-based architecture State management & routing'
    },
    {
      icon: 'settings',
      title: 'Version Control & DevOps',
      tagline: 'Clean code, collaboration, and CI/CD.',
      description: 'I follow best practices for code management and deployment. Git & GitHub workflows CI/CD pipelines Code reviews & branching strategies'
    }
    ];

}
