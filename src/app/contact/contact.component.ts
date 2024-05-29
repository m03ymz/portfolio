import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  contactData = {
    name: "",
    email: "",
    message: ""
  }
  // namePlaceholder: string | undefined;
  submitButtonDisabled: boolean = true;
  privacyPolicyAccepted: boolean = false;
  submitClicked: boolean = false;

  onSubmit(ngForm: NgForm) {
    if (!this.privacyPolicyAccepted && this.submitClicked) {
        return; // Stoppen Sie den Prozess hier, wenn die Datenschutzrichtlinie nicht akzeptiert wurde und der Submit-Button geklickt wurde
    }
    
    if (ngForm.valid) {
        console.log(this.contactData);
    }
}

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

  // mailTest = true;

  // post = {
  //   endPoint: 'https://deineDomain.de/sendMail.php',
  //   body: (payload: any) => JSON.stringify(payload),
  //   options: {
  //     headers: {
  //       'Content-Type': 'text/plain',
  //       responseType: 'text',
  //     },
  //   },
  // };

  // onSubmit(ngForm: NgForm) {
  //   if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
  //     this.http.post(this.post.endPoint, this.post.body(this.contactData))
  //       .subscribe({
  //         next: (response) => {

  //           ngForm.resetForm();
  //         },
  //         error: (error) => {
  //           console.error(error);
  //         },
  //         complete: () => console.info('send post complete'),
  //       });
  //   } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {

  //     ngForm.resetForm();
  //   }
  // }


}
