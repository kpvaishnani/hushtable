import { Component } from '@angular/core';
import { MaterialModule } from '../../material.module';
import { Location } from '@angular/common';

@Component({
  selector: 'app-my-subscription',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './my-subscription.component.html',
  styleUrl: './my-subscription.component.scss'
})
export class MySubscriptionComponent {
  constructor(public location:Location){}
}
