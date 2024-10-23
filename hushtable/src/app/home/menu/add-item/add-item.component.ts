import { Component, inject } from '@angular/core';
import { MaterialModule } from '../../../material.module';
import { MatDialogRef } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-item',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './add-item.component.html',
  styleUrl: './add-item.component.scss'
})
export class AddItemComponent {
  readonly dialogRef = inject(MatDialogRef<AddItemComponent>);
  selectedFile: File | null = null;
  photoPreview: string | ArrayBuffer | null = null;
  disableSelect = new FormControl(false);


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
