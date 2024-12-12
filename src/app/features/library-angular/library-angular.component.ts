import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { loadStripe, Stripe } from '@stripe/stripe-js';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../../environments/environment'
@Component({
  selector: 'app-library-angular',
  templateUrl: './library-angular.component.html',
  styleUrl: './library-angular.component.css'
})
export class LibraryAngularComponent {

  private stripePromise: Promise<Stripe | null>;

  stripePublicKey = environment.stripePublickey;

  stripe = (window as any).Stripe(this.stripePublicKey);

  items: {
    name: string;
    price: number;
    image: string;
    Author: string;
    quantity: number;
    content: string;
    Publisher: string;
    selected: boolean;
  }[] = [
    {
      image: '../../../../assets/imgg/coverImage.jpeg',
      name: 'Sea Change',
      Author: 'Jo Vosailagi',
      Publisher: 'The Asia Foundation',
      content: 'Change is whispering across the sand and threatening Tutu\'s home. Can Maku help Tutu move on?',
      price: 1499,
      quantity: 1,
      selected: false
    },
    {
      image: '../../../../assets/imgg/file-64897931cbd89.jpg',
      name: 'Spring',
      Author: 'N/A',
      Publisher: 'N/A',
      content: '"Spring" is a magical tale of a brave young girl and her loyal dog. They live in a world that seems to be trapped in an endless winter. Spring has a very special job to do - she must journey. But why does she need to do this, and what will happen when she does?',
      price: 1399,
      quantity: 1,
      selected: false
    },
    {
      image: '../../../../assets/imgg/3.jpeg',
      name: 'Let’s Explore the Forest',
      Author: 'Than Sovandara',
      Publisher: 'The Asia Foundation',
      content: 'One day Titi decides to go on an adventure in the forest. What will she discover?',
      price: 1599,
      quantity: 1,
      selected: false
    },
    {
      image: '../../../../assets/imgg/4.png',
      name: 'Protect the Environment',
      Author: 'Room to Read',
      Publisher: 'Room to Read',
      content: 'One day a teacher takes students for outdoor activities in a public place. There is a lot of rubbish there. What are they going to do with that rubbish?',
      price: 1799,
      quantity: 1,
      selected: false
    },
    {
      image: '../../../../assets/imgg/6.jpeg',
      name: 'Thin Fish',
      Author: 'S. Titik Widia',
      Publisher: 'The Asia Foundation',
      content: 'Yamad loves the thin fish crisps his aunt serves him when he visits her in Juata Laut. Can he learn to make them for himself?',
      price: 1299,
      quantity: 1,
      selected: false
    },
    {
      image: '../../../../assets/imgg/8.jpeg',
      name: 'The Way to the Big Sea!',
      Author: 'Intan Tri Istanti',
      Publisher: 'The Asia Foundation',
      content: 'The baby turtles are hatching. Follow them on their path to the sea.',
      price: 1699,
      quantity: 1,
      selected: false
    },
    {
      image: '../../../../assets/imgg/7.jpeg',
      name: '3…2…1… Blast Off',
      Author: 'Praba Ram, Sheela Preuitt',
      Publisher: 'Pratham Books',
      content: 'This book introduces readers to fascinating celestial objects, to space concepts and to the people involved in the various facets of astronomy. Come, let us go space travelling!',
      price: 1550,
      quantity: 1,
      selected: false
    },
    {
      image: '../../../../assets/imgg/5.jpeg',
      name: 'Thin Fish',
      Author: 'S. Titik Widia',
      Publisher: 'The Asia Foundation',
      content: 'Yamad loves the thin fish crisps his aunt serves him when he visits her in Juata Laut. Can he learn to make them for himself?',
      price: 1450,
      quantity: 1,
      selected: false
    },
    {
      image: '../../../../assets/imgg/11.jpg',
      name: 'The Only Good Indians: A Novel',
      Author: 'Stephen Graham Jones',
      Publisher: 'Gallery / Saga Press',
      content: 'The Only Good Indians: A Novel',
      price: 1549,
      quantity: 1,
      selected: false
    },
    {
      image: '../../../../assets/imgg/12.jpg',
      name: 'Verity',
      Author: 'Colleen Hoover',
      Publisher: 'N/A',
      content: 'Verity',
      price: 1699,
      quantity: 1,
      selected: false
    },
    {
      image: '../../../../assets/imgg/13.jpg',
      name: 'The Housemaid',
      Author: 'Freida McFadden',
      Publisher: 'N/A',
      content: 'The Housemaid',
      price: 1399,
      quantity: 1,
      selected: false
    },
    {
      image: '../../../../assets/imgg/14.jpg',
      name: 'The Frozen River: A Novel',
      Author: 'Ariel Lawhon',
      Publisher: 'N/A',
      content: 'The Frozen River: A Novel',
      price: 1799,
      quantity: 1,
      selected: false
    },
    {
      image: '../../../../assets/imgg/15.jpg',
      name: 'Jar of Hearts',
      Author: 'Jennifer Hillier',
      Publisher: 'Minotaur Books',
      content: 'Jar of Hearts',
      price: 1250,
      quantity: 1,
      selected: false
    },
    {
      image: '../../../../assets/imgg/16.jpg',
      name: 'Homecoming: A Novel',
      Author: 'Kate Morton',
      Publisher: 'N/A',
      content: 'Homecoming: A Novel',
      price: 1520,
      quantity: 1,
      selected: false
    },
    {
      image: '../../../../assets/imgg/17.webp',
      name: 'And Then There Were None',
      Author: 'Agatha Christie',
      Publisher: 'William Morrow',
      content: 'And Then There Were None',
      price: 1450,
      quantity: 1,
      selected: false
    },
    {
      image: '../../../../assets/imgg/18.jpg',
      name: '1922',
      Author: 'Stephen King',
      Publisher: 'Scribner Book Company',
      content: '1922',
      price: 1630,
      quantity: 1,
      selected: false
    },
    {
      image: '../../../../assets/imgg/21.jpg',
      name: 'Desolation Called Peace',
      Author: 'Arkady Martine',
      Publisher: 'N/A',
      content: 'Desolation Called Peace',
      price: 1525,
      quantity: 1,
      selected: false
    },
    {
      image: '../../../../assets/imgg/22.jpg',
      name: 'The Blighted Stars (Volume 1)',
      Author: 'Megan E. O\'Keefe',
      Publisher: 'N/A',
      content: 'The Blighted Stars (Volume 1)',
      price: 1340,
      quantity: 1,
      selected: false
    },
    {
      image: '../../../../assets/imgg/24.jpg',
      name: 'The Hero of Ages',
      Author: 'Brandon Sanderson',
      Publisher: 'Tor Books',
      content: 'The Hero of Ages (Mistborn, Book 3)',
      price: 1789,
      quantity: 1,
      selected: false
    },
    {
      image: '../../../../assets/imgg/31.jpg',
      name: 'Batman: The Adventures',
      Author: 'Alan PaulBurnett',
      Publisher: 'N/A',
      content: 'Batman: The Adventures Continue Season One',
      price: 1490,
      quantity: 1,
      selected: false
    },
    {
      image: '../../../../assets/imgg/26.jpg',
      name: 'Leagues Under the Sea',
      Author: 'Jules Verne',
      Publisher: 'Penguin Classics',
      content: 'Twenty Thousand Leagues Under the Sea',
      price: 1605,
      quantity: 1,
      selected: false
    },
    {
      image: '../../../../assets/imgg/27.jpg',
      name: 'The Last Shadow',
      Author: 'Orson Scott Card',
      Publisher: 'N/A',
      content: 'The Last Shadow (The Ender Saga, 6)',
      price: 1460,
      quantity: 1,
      selected: false
    },
    {
      image: '../../../../assets/imgg/28.jpg',
      name: 'Phandelver and Below',
      Author: 'RPG Team Wizards',
      Publisher: 'N/A',
      content: 'Phandelver and Below: The Shattered Obelisk (Dungeons & Dragons Adventure Book)',
      price: 1695,
      quantity: 1,
      selected: false
    },
    {
      image: '../../../../assets/imgg/30.jpg',
      name: 'The Science Fiction Century',
      Author: 'David',
      Publisher: 'N/A',
      content: 'The Science Fiction Century',
      price: 1450,
      quantity: 1,
      selected: false
    }
  ];

  childrenBooks = this.items.slice(0, 8);
  fictionMysteryBooks = this.items.slice(8, 16);
  sciFiFantasyBooks = this.items.slice(16, 24);
  selectedProduct: any;

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
