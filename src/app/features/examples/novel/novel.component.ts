import { Component, OnInit,ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { loadStripe, Stripe } from '@stripe/stripe-js';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../../../environments/environment'
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { ItemsService } from '../Trailer/items/items.service';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../../footer/footer.component';

@Component({
  selector: 'app-tutorial',
  standalone: true,
  templateUrl: './novel.component.html',
  styleUrls: ['./novel.component.css'],
  imports: [CommonModule, RouterModule,HeaderComponent,FooterComponent],
})
export class TutorialComponent {
  private stripePromise: Promise<Stripe | null>;


 stripePublicKey = environment.stripePublickey;

  stripe = (window as any).Stripe(this.stripePublicKey);
  
  items: { 
    name: string; 
    price: number; 
    image: string; 
    Author: string; 
    quantity: number;
    selected: boolean; // Added selected flag
  }[] = [
    { 
      image: '../../../../assets/imgg/110.jpg',
      name: 'Next in Line: The must-read crime-thriller from the Sunday Times bestselling author',
      Author: 'Jeffrey Archer',
      price: 1200,
      quantity: 1,
      selected: false  // Default to false
    },
    { 
      image: '../../../../assets/imgg/106.jpg',
      name: 'The Wishing Well',
      Author: 'Vivian Porter',
      price: 1500,
      quantity: 1,
      selected: false
    },
    { 
      image: '../../../../assets/imgg/104.jpg',
      name: 'The Narrows: 10 (A Harry Bosch Novel, 10)',
      Author: 'Michael Connelly',
      price: 2200,
      quantity: 1,
      selected: false
    },
    { 
      image: '../../../../assets/imgg/115.webp',
      name: 'The Complete Novel of Sherlock Holmes (English, Paperback, Doyle Arthur Conan)',
      Author: '',
      price: 1999,
      quantity: 1,
      selected: false
    },
    { 
      image: '../../../../assets/imgg/105.jpg',
      name: 'Bittersweet: A Grumpy Sunshine Neighbors Romance',
      Author: 'Morgan Elizabeth',
      price: 1800,
      quantity: 1,
      selected: false
    },
    { 
      image: '../../../../assets/imgg/107.jpg',
      name: 'Romance Novella - Echoes of the Past: A Ghost Hunter and Medium Unite to Unravel a Deadly Secret',
      Author: 'Evangeline Ashbourne',
      price: 2300,
      quantity: 1,
      selected: false
    },
    { 
      image: '../../../../assets/imgg/108.jpg',
      name: 'Thoorigai Vanamadi',
      Author: 'Saranya Hema',
      price: 1400,
      quantity: 1,
      selected: false
    },
    { 
      image: '../../../../assets/imgg/111.jpg',
      name: 'The Lost Bookshop: The most charming and uplifting novel for 2024 and the perfect gift for book lovers!',
      Author: 'Evie Woods',
      price: 1600,
      quantity: 1,
      selected: false
    },
    { 
      image: '../../../../assets/imgg/109.jpg',
      name: 'The Adventurers and the Temple of Treasure',
      Author: 'Jemma Hatt',
      price: 1300,
      quantity: 1,
      selected: false
    },
    { 
      image: '../../../../assets/imgg/117.webp',
      name: 'Messed Up! But All For Love',
      Author: 'Arvind Parasha',
      price: 2100,
      quantity: 1,
      selected: false
    },
    { 
      image: '../../../../assets/imgg/118.webp',
      name: 'Grandmaster Of Demonic Cultivation: Mo Dao Zu Shi (Novel) Vol. 1 (English, Paperback, Mo Xiang Tong Xiu)',
      Author: '',
      price: 1700,
      quantity: 1,
      selected: false
    },
    { 
      image: '../../../../assets/imgg/101.jpg',
      name: 'Wilderness: A Novel',
      Author: 'Lance Weller',
      price: 1500,
      quantity: 1,
      selected: false
    },
    { 
      image: '../../../../assets/imgg/112.webp',
      name: 'Crossfire Novel',
      Author: 'Sylvia Day',
      price: 2000,
      quantity: 1,
      selected: false
    },
    { 
      image: '../../../../assets/imgg/113.jpg',
      name: 'The Guardians: A Novel',
      Author: 'John Grisham',
      price: 2200,
      quantity: 1,
      selected: false
    },
    { 
      image: '../../../../assets/imgg/114.jpg',
      name: 'Moral Compass: A Novel',
      Author: 'Danielle Steel',
      price: 1800,
      quantity: 1,
      selected: false
    },
    { 
      image: '../../../../assets/imgg/103.jpg',
      name: 'Atticus',
      Author: 'Ron Hansen',
      price: 1700,
      quantity: 1,
      selected: false
    },
    { 
      image: '../../../../assets/imgg/119.webp',
      name: 'Crooked Kingdom',
      Author: 'Bardugo Leigh',
      price: 1600,
      quantity: 1,
      selected: false
    },
    { 
      image: '../../../../assets/imgg/120.webp',
      name: 'The Dead Secret A Novel',
      Author: 'Collins Wilkie',
      price: 1400,
      quantity: 1,
      selected: false
    }
  ];
  
  toggleSelectProduct(index: number) {
    this.items[index].selected = !this.items[index].selected;
  }
    
  selectProduct(item: any) {
    this.selectedProduct = item;
   
  }
  
 
  constructor(private http: HttpClient) {
    if (!this.stripePublicKey) {
      throw new Error('Stripe public key is not defined');
    }
    this.stripePromise = loadStripe(this.stripePublicKey);
  }
  selectedProduct: any;

  async onCheckout() {

    const selectedItems = this.items.filter(item => item.selected);

    const lineItems = selectedItems.map(item => ({
      price_data: {
        currency: 'inr',
        product_data: {
          name: item.name,
          images: [item.image || ''], 
        },
        unit_amount: item.price * 100, 
      },
      quantity: item.quantity || 1,
    }));




    if (lineItems.length === 0) {
      alert('No items selected for checkout.');
      return;
    }

    try {
  
      const response = await fetch('https://digilibrary-backend.onrender.com/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ lineItems }),
      });

      if (!response.ok) {
        throw new Error('Failed to create checkout session');
      }

      const session = await response.json();
      if (!session || !session.id) {
        throw new Error('Invalid session data returned from backend');
      }

      const stripe = await loadStripe(this.stripePublicKey);
      if (!stripe) {
        throw new Error('Failed to load Stripe. Please try again later.');
      }

      const { error } = await stripe.redirectToCheckout({ sessionId: session.id });
      if (error) {

        alert('Something went wrong with the checkout. Please try again.');
      }
    } catch (error: unknown) {
      alert(`Something went wrong: ${(error as Error).message}`);

    }
  }
}


  