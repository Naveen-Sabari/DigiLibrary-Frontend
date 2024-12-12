import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../../footer/footer.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [HeaderComponent,FooterComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contactModel = {
    name: '',
    email: '',
    message: ''
  };


  onSubmit() {
    if (this.contactModel.name && this.contactModel.email && this.contactModel.message) {
   
    } else {
 
    }
  }
}
