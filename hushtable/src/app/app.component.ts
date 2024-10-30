import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { QRCodeModule } from 'angularx-qrcode';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterOutlet,CommonModule , QRCodeModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'hushtable';



 
}
