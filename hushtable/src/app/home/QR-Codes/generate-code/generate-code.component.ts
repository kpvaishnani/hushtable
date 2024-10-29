import { Component, Inject, inject } from '@angular/core';
import { MaterialModule } from '../../../material.module';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CommonService } from '../../../services/common.service';
import { SnackbarService } from '../../../services/snackbar.service';
import { QRCodeModule } from 'angularx-qrcode';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-generate-code',
  standalone: true,
  imports: [MaterialModule, QRCodeModule, CommonModule,MaterialModule],
  templateUrl: './generate-code.component.html',
  styleUrl: './generate-code.component.scss'
})
export class GenerateCodeComponent {



  collection = 'qrCode';
  newCode = { tableNumber: '', QR: '' }

  constructor(
    public dialogRef: MatDialogRef<GenerateCodeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private commonService: CommonService,
    private snackbar: SnackbarService
  ) { }

  ngOnInit() {

    if (this.data) {
      this.newCode = { ...this.data.qrData };
    }
  }

  async submit() {
    try {
     
      if (this.data?.qrData) {
          this.newCode.QR = `Table-${this.data.qrData.tableNumber}`
        await this.commonService.update(this.collection, this.data.qrData.id, this.newCode);
        this.snackbar.showMessage('Item updated successfully', 'success');
      } else {
        this.newCode.QR = `Table-${this.newCode.tableNumber}`
        const result = await this.commonService.create(this.collection, this.newCode);
        this.snackbar.showMessage('New item added successfully', 'success');
      }
      this.dialogRef.close(true);
    } catch (error) {
      console.error('Error saving item:', error);
    }
  }

  

}
