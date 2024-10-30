import { Component, Inject, inject } from '@angular/core';
import { MaterialModule } from '../../../material.module';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CommonService } from '../../../services/common.service';
import { SnackbarService } from '../../../services/snackbar.service';

@Component({
  selector: 'app-add-item',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './add-item.component.html',
  styleUrl: './add-item.component.scss'
})
export class AddItemComponent {
 
  selectedFile: File | null = null;
  photoPreview: string | ArrayBuffer | null = null;
  newItem = {image:this.photoPreview ,  name: '', category: '' };
  collection = 'menu'

  constructor(
    private commonService : CommonService,
    private snackbar : SnackbarService,
    public dialogRef: MatDialogRef<AddItemComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ){}

 
  ngOnInit(){
  
    if (this.data) {
      this.newItem = { ...this.data.menuData }; 
      this.photoPreview = this.newItem.image; 
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
      if (this.data?.menuData) { 
        await this.commonService.update(this.collection, this.data.menuData.id, this.newItem);
        this.snackbar.showMessage('Item updated successfully', 'success');
      } else { 
        const result = await this.commonService.create(this.collection, this.newItem);
        this.snackbar.showMessage('New item added successfully', 'success');
      }
      this.dialogRef.close(true);  
    } catch (error) {
      console.error('Error saving item:', error);
    }
  }
}
