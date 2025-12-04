import { Component } from '@angular/core';
import { RouterModule, NavigationEnd, Router  } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { AiAssistantComponent } from './ai-assistant/ai-assistant.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, HeaderComponent,AiAssistantComponent, HttpClientModule, FooterComponent], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent { 

  
constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0); // Scroll to top on route change
      }
    });
  }

}
