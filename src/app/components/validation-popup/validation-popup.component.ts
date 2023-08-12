import { Component } from '@angular/core';

@Component({
  selector: 'app-validation-popup',
  templateUrl: './validation-popup.component.html',
  styleUrls: ['./validation-popup.component.css'],
})
export class ValidationPopupComponent {
  isShowing: boolean = false;
  isSuccessful: boolean = false;
  isForEditPage: boolean = false;

  showSuccessValidationPopUp(): void {
    this.showValidationPopUp(true);
  }

  showFailValidationPopUp(): void {
    this.showValidationPopUp(false);
  }

  showEditSuccessValidationPopUp() {
    this.isForEditPage = true
    this.showValidationPopUp(true);
  }

  private showValidationPopUp(isSuccessfulNeeded: boolean): void {
    if (isSuccessfulNeeded) {
      this.isSuccessful = true;
    }

    this.isShowing = true;

    this.hidePopUpAfterThreeSeconds();
  }

  private hidePopUpAfterThreeSeconds(): void {
    setTimeout(() => {
      this.isShowing = false;
      this.isSuccessful = false;
      this.isForEditPage = false;
    }, 3000);
  }
}
