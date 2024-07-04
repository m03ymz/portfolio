import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { TranslationService } from '../translation.service.component';
import { TranslateModule } from '@ngx-translate/core';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule, MatSnackBarModule, TranslateModule, RouterModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {

  translate = inject(TranslationService);

  http = inject(HttpClient)
  snackBar = inject(MatSnackBar);

  contactData = {
    name: "",
    email: "",
    message: ""
  }
  // namePlaceholder: string | undefined;
  submitButtonDisabled: boolean = true;
  privacyPolicyAccepted: boolean = false;
  submitClicked: boolean = false;

//   onSubmit(ngForm: NgForm) {
//     if (!this.privacyPolicyAccepted && this.submitClicked) {
//         return; // Stoppen Sie den Prozess hier, wenn die Datenschutzrichtlinie nicht akzeptiert wurde und der Submit-Button geklickt wurde
//     }
    
//     if (ngForm.valid) {
//         console.log(this.contactData);
//     }
// }

  // onFocus(event: any) {
  //   event.target.placeholder = '';
  // }
  
  onBlur(event: any) {
    if (!event.target.value) {
      event.target.placeholder = event.target.id === 'name' ? 'Your name' : event.target.id === 'email' ? 'Your email' : 'Your message';
    }
  }

  validateForm() {
    const formValid = this.contactData.name && this.contactData.email && this.contactData.message
      && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.contactData.email) // Email validation regex
      && (document.getElementById('privacyPolicyCheckbox') as HTMLInputElement).checked;
  
    this.submitButtonDisabled = !formValid;
  }

  onSubmitClick() {
    this.submitClicked = true;
    // console.log("Submit button clicked. submitClicked is now:", this.submitClicked);
    this.validateForm();
  }

  mailTest = false;

  post = {
    endPoint: 'https://muhammed-yilmaz.com/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {

            ngForm.resetForm();
            this.snackBar.open('E-Mail wurde erfolgreich gesendet.', 'Schließen', {
              duration: 3000,
            });
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => console.info('send post complete'),
        });
    // } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {

    //   ngForm.resetForm();
    // }
    }
  }

  showUpButton2Flag: boolean = false;

  showUpButton2() {
    this.showUpButton2Flag = true;
  }

  hideUpButton2() {
    this.showUpButton2Flag = false;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  ngOnInit(): void {
    AOS.init({
        duration: 1000,
        easing: 'ease',
        // once: true,
        // offset: 500
        // anchorPlacement: 'top-bottom', 
        // startEvent: 'DOMContentLoaded' 
    });
  }

}
