import { Component, inject } from '@angular/core';
import { MaterialModule } from '../../../material.module';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-staff',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './add-staff.component.html',
  styleUrl: './add-staff.component.scss'
})
export class AddStaffComponent {

  readonly dialogRef = inject(MatDialogRef<AddStaffComponent>);
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
