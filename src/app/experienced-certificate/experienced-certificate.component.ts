import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import AOS from 'aos';

declare var bootstrap: any;

@Component({
  selector: 'app-experienced-certificate',
  templateUrl: './experienced-certificate.component.html',
  styleUrls: ['./experienced-certificate.component.scss'],
  // encapsulation: ViewEncapsulation.None
})
export class ExperiencedCertificateComponent implements OnInit {
  selectedImage: string = '';

  ngOnInit(): void {
    AOS.init();
  }

  openModal(imgSrc: string): void {
    this.selectedImage = imgSrc;
  }

  // close(): void {
  //   const modalElement = document.getElementById('certificateModal');
  //   const modalInstance = bootstrap.Modal.getInstance(modalElement);
  //   if (modalInstance) {
  //     modalInstance.hide();
  //   }
  //   this.selectedImage = '';
  // }
}
