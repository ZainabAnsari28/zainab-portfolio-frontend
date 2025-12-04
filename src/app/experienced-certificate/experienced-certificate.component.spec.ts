import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperiencedCertificateComponent } from './experienced-certificate.component';

describe('ExperiencedCertificateComponent', () => {
  let component: ExperiencedCertificateComponent;
  let fixture: ComponentFixture<ExperiencedCertificateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExperiencedCertificateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperiencedCertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
