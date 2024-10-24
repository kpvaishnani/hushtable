import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../../material.module';
import { AuthService } from '../../services/auth.service';
import { SnackbarService } from '../../services/snackbar.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    RouterModule,
    MaterialModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  email = '';
  password = '';
  confirmPassword = ''

  hide = signal(true);
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

  constructor(private authService:AuthService , private snackbarService:SnackbarService){}

  register() {
    if (this.password === this.confirmPassword) {
      this.authService.signUp(this.email, this.password);
    } else {
      this.snackbarService.showMessage('Passwords do not match!' , 'error');
    }
  }
}
