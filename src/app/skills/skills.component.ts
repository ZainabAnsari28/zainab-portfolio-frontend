import { Component ,ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, MatCardModule,MatChipsModule, MatProgressBarModule, MatButtonModule ],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class SkillsComponent {
getSkillRemark(level: number): string {
  if (level > 85) return 'Proficiency';
  else if (level > 70) return 'Very Good';
  else if (level > 50) return 'Good';
  else return 'Needs Improvement';
}

getRemarkClass(level: number): string {
  if (level > 85) return 'proficiency';
  else if (level > 70) return 'very-good';
  else if (level > 50) return 'good';
  else return 'needs-improvement';
}


 skillsByCategory = [
  {
    category: 'Backend',
    skills: [
      { name: 'Java', level: 90, icon: 'assets/icons/Java.png' },
      { name: 'Spring Boot', level: 92, icon: 'assets/icons/SpringBoot.png' },
      { name: 'JWT', level: 60, icon: 'assets/icons/JWT.png' },
      { name: 'Spring Security', level: 60, icon: 'assets/icons/Spring-Security.png' }
    ]
  },
  {
    category: 'Database',
    skills: [
      { name: 'MySQL', level: 80, icon: 'assets/icons/Mysql3.png' },
      { name: 'PostgreSQL', level: 60, icon: 'assets/icons/PostgreSQL.png' }
    ]
  },
  {
    category: 'Frontend',
    skills: [
      { name: 'Angular', level: 90, icon: 'assets/icons/Angular.png' },
      { name: 'Angular Material', level: 85, icon: 'assets/icons/AngularMaterial.png' },
      { name: 'HTML', level: 85, icon: 'assets/icons/HTML.png' },
      { name: 'CSS', level: 85, icon: 'assets/icons/CSS.png' },
      { name: 'JavaScript', level: 70, icon: 'assets/icons/JS.png' }
    ]
  },
  {
    category: 'Tools',
    skills: [
      { name: 'Git', level: 80, icon: 'assets/icons/Git.png' },
      { name: 'GitHub', level: 80, icon: 'assets/icons/GitHub.png' },
      { name: 'VS Code', level: 90, icon: 'assets/icons/VSCode.png' },
      { name: 'Postman', level: 90, icon: 'assets/icons/PostMan.png' },
       { name: 'Eclipse', level: 70, icon: 'assets/icons/Eclipse.png' }
    ]
  },
  {
    category: 'Soft Skills',
    skills: [
      { name: 'Team Collaboration', level: 85, icon: 'https://img.icons8.com/color/48/collaborating-in-circle.png' },
      { name: 'Problem-Solving', level: 85, icon: 'https://img.icons8.com/external-wanicon-flat-wanicon/64/external-problem-solving-business-administration-wanicon-flat-wanicon.png' },
      { name: 'Time Management', level: 85, icon: 'https://img.icons8.com/external-kmg-design-flat-kmg-design/32/external-time-mangement-time-management-kmg-design-flat-kmg-design.png' },
      { name: 'Client-Centric Approach', level: 85, icon: 'https://img.icons8.com/color/48/methodical-approach.png' }
    ]
  },

];


}
