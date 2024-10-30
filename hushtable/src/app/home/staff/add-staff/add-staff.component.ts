import { Component, Inject, inject } from '@angular/core';
import { MaterialModule } from '../../../material.module';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SnackbarService } from '../../../services/snackbar.service';
import { CommonService } from '../../../services/common.service';

@Component({
  selector: 'app-add-staff',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './add-staff.component.html',
  styleUrl: './add-staff.component.scss'
})
export class AddStaffComponent {

  selectedFile: File | null = null;
  photoPreview: string | ArrayBuffer | null = null;
  newStaff = {image: '' , name:'' , email:''};
  collection = 'staff'

  constructor(
    private commonService : CommonService,
    private snackbar : SnackbarService,
    public dialogRef: MatDialogRef<AddStaffComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ){}


  ngOnInit(){
  
    if (this.data) {
      this.newStaff = { ...this.data.staffData }; 
      this.photoPreview = this.newStaff.image; 
    }
  }

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

  

  async submit() {
    try {
      if (this.data?.staffData) { 
        await this.commonService.update(this.collection, this.data.staffData.id, this.newStaff);
        this.snackbar.showMessage(' updated successfully', 'success');
      } else { 
        const result = await this.commonService.create(this.collection, this.newStaff);
        this.snackbar.showMessage('New staff added successfully', 'success');
      }
      this.dialogRef.close(true);  
    } catch (error) {
      console.error('Error saving staff:', error);
    }
  }

}
