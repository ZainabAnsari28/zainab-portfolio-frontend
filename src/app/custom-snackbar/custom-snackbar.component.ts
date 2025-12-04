import { Component, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA, MatSnackBarRef } from '@angular/material/snack-bar';

@Component({
  selector: 'app-custom-snackbar',
  templateUrl: './custom-snackbar.component.html',
  styleUrls: ['./custom-snackbar.component.scss']
})
export class CustomSnackbarComponent {
  message: string;
  type: 'success' | 'error';

  constructor(
    @Inject(MAT_SNACK_BAR_DATA) public data: { message: string; type: 'success' | 'error' },
    private snackBarRef: MatSnackBarRef<CustomSnackbarComponent>
  ) {
    this.message = data.message;
    this.type = data.type;
  }

  dismiss(): void {
    this.snackBarRef.dismiss();
  }
}
