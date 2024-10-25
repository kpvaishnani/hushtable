import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initializeApp } from 'firebase/app';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'hushtable';

  firebaseConfig = {
    apiKey: "AIzaSyDuDlQWsWlkGiEmh73NYsOAT4qB4F6qAY0",
    authDomain: "hushtable-157a2.firebaseapp.com",
    projectId: "hushtable-157a2",
    storageBucket: "hushtable-157a2.appspot.com",
    messagingSenderId: "356603333565",
    appId: "1:356603333565:web:16b2303230b979be05e0d4",
    measurementId: "G-G51Z3J3HN5"
  };

  app = initializeApp(this.firebaseConfig);
}
