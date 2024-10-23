import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../../material.module';

@Component({
  selector: 'app-setting',
  standalone: true,
  imports: [RouterModule,MaterialModule,],
  templateUrl: './setting.component.html',
  styleUrl: './setting.component.scss'
})
export class SettingComponent {

  review = 4;
  hour = 0;
  min = 0;
  selectedFile: File | null = null;
  photoPreview: string | ArrayBuffer | null = null;


  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];

      // Create a preview of the uploaded photo
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result;
        if (result) {
          this.photoPreview = result;  // Assign only if result is not undefined
        }
      };
      reader.readAsDataURL(this.selectedFile);
    }
  }
}