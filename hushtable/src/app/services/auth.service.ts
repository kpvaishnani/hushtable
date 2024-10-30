import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth:AngularFireAuth,private router:Router, private snackbarService: SnackbarService) { }

  async signUp(email: string, password: string) {
    try {
      await this.auth.createUserWithEmailAndPassword(email, password);
      this.snackbarService.showMessage('Sign-up successful!', 'success'); 
      this.router.navigate(['/']);
    } catch (error) {
      console.error(error)
    }
  }

  async login(email: string, password: string) {
    try {
      await this.auth.signInWithEmailAndPassword(email, password);
      this.snackbarService.showMessage('Login successful!', 'success'); 
      this.router.navigate(['/home']);
    } catch (error: any) {
      console.error(error)
    }
  }

  async logOut(){
    try{
      await this.auth.signOut();
      this.router.navigate(['/']);
    }
    catch(error){
      console.error(error)
    }
  }
  
}
