import { Component, Input ,ViewEncapsulation } from '@angular/core';
import { Feature } from '../news/feature'; 
import { ActivatedRoute } from '@angular/router'; 
import { CommonModule } from '@angular/common';  
@Component({
  selector: 'app-modal',
  standalone: true, 
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css'],
  imports: [CommonModule], 
  encapsulation: ViewEncapsulation.None  
})
export class ModelComponent  {

  @Input() newsItem: any;
  
  constructor(private route: ActivatedRoute) {}


  closeModal(): void {
    this.newsItem = undefined;  }
}