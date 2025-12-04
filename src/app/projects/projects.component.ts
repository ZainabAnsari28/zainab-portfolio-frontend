import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  companyProjects = [
    {
      projectName: 'TotalEnergies - Anael Application',
      applicationName: 'Anael (HR & Payroll)',
      responsibilities: [
        'Handled HR and payroll functions.',
        'Resolved issues via Snow ticketing tool.',
        'Connected with users to solve application issues.',
        'Performed database operations using SSMS.'
      ],
      achievements: [
        'Resolved high-priority tickets efficiently.',
        'Improved data accuracy and system reliability.',
        'Enhanced user satisfaction through timely support.'
      ]
    },
    {
      projectName: 'TotalEnergies - Spill Wizard',
      applicationName: 'Spill Wizard (Marine Pollution Tracker)',
      responsibilities: [
        'Provided technical support for Angular-based web app.',
        'Enhanced visual and analytical modules.',
        'Supported marine pollution tracking workflows.'
      ],
      achievements: [
        'Improved dashboard performance and usability.',
        'Ensured smooth functioning of tracking system.',
        'Strengthened system reliability.'
      ]
    }
  ];

  selfProjects = [
    {
      name: 'FashionVibe',
      tech: 'Java, Spring Boot, JWT, Spring Security, Angular, Angular Material, Bootstrap, CSS, MySQL',
      features: 'Token-based login, role-based UI, product search/filter, cart CRUD, order history, forgot/reset password via email, admin product/order management',
      description: 'A fully responsive e-commerce website with separate user and admin interfaces.',
      image: 'assets/images/FashionVibeProject.png',
      github: 'https://github.com/ZainabAnsari28/FashionVibe.git',
      demo: 'https://fashionvibe.netlify.app/'
    },
    {
      name: 'Portfolio Website',
      tech: 'Angular, Angular Material, Bootstrap, CSS, Java, Spring Boot',
      features: 'Home, About, Skills, Services, Experience, Projects, Contact, Resume download, Video popup, Zainab AI Assistant',
      description: 'A personal portfolio showcasing my skills, experience, and projects with a modern UI.',
      image: 'assets/images/Portfolio.png',
      github: 'https://github.com/zainab/portfolio',
      demo: 'https://zainab-portfolio.com'
    }
  ];
 
  activeFilter: 'all' | 'company' | 'self' = 'all';
    filterProjects(type: 'all' | 'company' | 'self') {
      this.activeFilter = type;
    }
}


