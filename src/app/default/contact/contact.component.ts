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
      console.log(this.formData);
      window.alert('Message sent Successfully!');
    }
  }
}
