import { Component } from '@angular/core';
import { MaterialModule } from '../../material.module';

@Component({
  selector: 'app-my-subscription',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './my-subscription.component.html',
  styleUrl: './my-subscription.component.scss'
})
export class MySubscriptionComponent {

}
