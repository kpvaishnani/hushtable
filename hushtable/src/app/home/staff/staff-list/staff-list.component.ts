import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../../../material.module';
import { MatDialog } from '@angular/material/dialog';
import { AddStaffComponent } from '../add-staff/add-staff.component';
import { CommonService } from '../../../services/common.service';
import { DeleteDialogComponent } from '../../../common/delete-dialog/delete-dialog.component';

@Component({
  selector: 'app-staff-list',
  standalone: true,
  imports: [RouterModule, MaterialModule],
  templateUrl: './staff-list.component.html',
  styleUrl: './staff-list.component.scss'
})
export class StaffListComponent {

  displayedColumns: string[] = ['Staff Name', ' Total Review', 'All Over Review', 'Weekly Review ' , 'actions'];
  dataSource:any = [];
  collection = 'staff'

  constructor(
    private dialog:MatDialog,
    private commonService : CommonService,
    
  ){}

  ngOnInit(){
    this.getStaffList()
  }

  openDialog(staffData?:any){
    const dialogRef = this.dialog.open(AddStaffComponent , {data : {staffData}});
    dialogRef.afterClosed().subscribe((result: any) => {
      this.dataSource.push(result);
      this.getStaffList()
  })
  }

  async getStaffList(){
    try{
      this.dataSource = await this.commonService.getAll(this.collection);
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
            this.getStaffList(); 
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
