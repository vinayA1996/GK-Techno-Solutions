import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  @ViewChild('contactForm', { static: true }) contactForm: NgForm;
  showloader: boolean = false;
  formData = {
    name: '',
    email: '',
    mobile: '',
    message: '',
  };
  constructor(private http: HttpClient) {}
  submitForm() {
    const formPayload = {
      access_key: '3f07c4bf-133b-4d95-8aec-0b2a3410f96d',
      name: this.formData.name,
      email: this.formData.email,
      message: this.formData.message,
    };

    this.showloader = true;
    this.http.post('https://api.web3forms.com/submit', formPayload).subscribe(
      (response: any) => {
        if (response.success) {
          window.alert('Message sent successfully');
          this.showloader = false;
          this.contactForm.resetForm();
        }
      },
      (error) => {
        console.error('Error submitting form:', error);
        this.showloader = false;
        window.console.error('ERROR In Sending message:');
      }
    );
  }
}
