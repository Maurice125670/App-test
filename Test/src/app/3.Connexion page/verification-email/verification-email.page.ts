import { Component, ViewChildren, QueryList } from '@angular/core';
import { IonInput } from '@ionic/angular';
 
@Component({
  selector: 'app-verification-email',
  templateUrl: './verification-email.page.html',
  styleUrls: ['./verification-email.page.scss'],
})
export class VerificationEmailPage {
  otpValues: string[] = ['', '', '', ''];
 
  @ViewChildren('otpBox') otpInputs!: QueryList<IonInput>;
 
  onOtpInput(event: any, index: number): void {
    const value = event.target.value;
 
    // Ensure only numeric input
    if (!/^\d$/.test(value)) {
      this.otpValues[index] = ''; // Clear invalid input
      return;
    }
 
    // Focus on the next input box if available
    const inputs = this.otpInputs.toArray();
    if (index < inputs.length - 1 && value) {
      inputs[index + 1].setFocus();
    }
  }
}