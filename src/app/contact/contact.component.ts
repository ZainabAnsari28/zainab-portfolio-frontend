import { Component, HostListener, ViewContainerRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ContactService } from '../BackendServices/contact.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { CustomSnackbarComponent } from '../custom-snackbar/custom-snackbar.component';
import { Inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatButtonModule,
    CustomSnackbarComponent
  ],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})

export class ContactComponent {
  contactForm: FormGroup;
  
isMobile: boolean = false;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkMobile();
  }

 ngOnInit() {
  if (isPlatformBrowser(this.platformId)) {
    this.checkMobile();
    window.addEventListener('resize', () => this.checkMobile());
  }
}

  checkMobile() {
  if (typeof window !== 'undefined') {
    this.isMobile = window.innerWidth < 768;
  }}

constructor(
  @Inject(PLATFORM_ID) private platformId: Object,
  private fb: FormBuilder,
  private contactService: ContactService,
  private snackBar: MatSnackBar,
  private viewContainerRef: ViewContainerRef
)
{
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  isSubmitting = false;


onSubmit(): void {
  if (this.contactForm.valid) {
    this.isSubmitting = true;
    this.contactService.submitContact(this.contactForm.value).subscribe({
      next: () => {
                
        this.snackBar.open('Message sent successfully!', 'Close', {
          duration: 4000,
          verticalPosition: 'top',
          horizontalPosition: 'center',
          panelClass: ['custom-snackbar-theme']
        });

        this.contactForm.reset();
        this.isSubmitting = false;
      },
      error: (err) => {
        const errorMsg = err?.error || 'Failed to submit form. Try again!';
        this.snackBar.open(errorMsg, 'Close', {
          duration: 3000,
          verticalPosition: 'top',
          horizontalPosition: 'center',
          panelClass: ['custom-snackbar-theme']
        });
        this.isSubmitting = false;
      }
    });
  }
}

}



