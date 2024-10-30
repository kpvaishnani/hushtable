import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../../../material.module';
import { GenerateCodeComponent } from '../generate-code/generate-code.component';
import { MatDialog } from '@angular/material/dialog';
import { CommonService } from '../../../services/common.service';
import { QRCodeModule } from 'angularx-qrcode';
import { DeleteDialogComponent } from '../../../common/delete-dialog/delete-dialog.component';


@Component({
  selector: 'app-code-list',
  standalone: true,
  imports: [RouterModule,MaterialModule , QRCodeModule ],
  templateUrl: './code-list.component.html',
  styleUrl: './code-list.component.scss'
})
export class CodeListComponent {

  displayedColumns: string[] = ['QId', 'QRCode', 'TableNo','link','download','action'];
  dataSource =  [
    {QId: 1, QRCode: 'Hydrogen', TableNo: 1.0079},
    
  ];
  collection = 'qrCode'
qrcodeCanvas: any;

  constructor(
    private dialog:MatDialog,
    private commonService : CommonService
  ){}

  ngOnInit(){
    this.getQRList()
  }

  openDialog(qrData?:any){
    const dialogRef = this.dialog.open(GenerateCodeComponent , {data:{qrData}} );
    dialogRef.afterClosed().subscribe((result: any) => {
      this.dataSource.push(result);
      this.getQRList()
  });
  }

  async getQRList(){
    try{
      this.dataSource = await this.commonService.getAll(this.collection);
      console.log(this.dataSource)
    }
    catch(error){
      console.error(error)
    }
  }

  async openDeleteDialog(id: string) {
    try {
      const dialogRef = this.dialog.open(DeleteDialogComponent, { data: { id } });
  
      dialogRef.afterClosed().subscribe((result: boolean) => {
        if (result) { 
          this.commonService.delete(this.collection, id).then(() => {
            this.getQRList(); 
          }).catch(error => {
            console.error('Failed to delete item', error);
          });
        }
      });
    } catch (error) {
      console.error(error);
    }
  }

  
 
}
