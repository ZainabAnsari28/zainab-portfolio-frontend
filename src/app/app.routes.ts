import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { ExperiencedCertificateComponent } from './experienced-certificate/experienced-certificate.component';
import { ContactComponent } from './contact/contact.component';
import { AiAssistantComponent } from './ai-assistant/ai-assistant.component';


export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent},
    { path: 'skills', component: SkillsComponent},
    { path: 'services', component: ServicesComponent},
    { path: 'projects', component: ProjectsComponent},
    { path: 'experienced', component: ExperiencedCertificateComponent},
    { path: 'contact', component: ContactComponent},
    { path: 'AIAssistent', component:AiAssistantComponent}
];
