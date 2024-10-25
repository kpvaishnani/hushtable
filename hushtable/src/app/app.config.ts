import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDuDlQWsWlkGiEmh73NYsOAT4qB4F6qAY0",
  authDomain: "hushtable-157a2.firebaseapp.com",
  projectId: "hushtable-157a2",
  storageBucket: "hushtable-157a2.appspot.com",
  messagingSenderId: "356603333565",
  appId: "1:356603333565:web:16b2303230b979be05e0d4",
  measurementId: "G-G51Z3J3HN5"
};

export const appConfig: ApplicationConfig = {
  providers: 
  [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), provideClientHydration(), 
    provideAnimationsAsync(),
    importProvidersFrom(
      AngularFireModule.initializeApp(firebaseConfig),
      AngularFireAuthModule
    ),
  ]
};
