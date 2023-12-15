import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    mobile: '',
    message: '',
  };

  submitForm(form: any) {
    if (form.valid) {
      // Do something with the form data, e.g., send it to a server
      console.log(this.formData);
    }
  }
}
