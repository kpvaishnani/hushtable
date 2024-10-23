import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../../../material.module';
import { MatDialog } from '@angular/material/dialog';
import { AddStaffComponent } from '../add-staff/add-staff.component';

@Component({
  selector: 'app-staff-list',
  standalone: true,
  imports: [RouterModule, MaterialModule],
  templateUrl: './staff-list.component.html',
  styleUrl: './staff-list.component.scss'
})
export class StaffListComponent {

  displayedColumns: string[] = ['Staff Name', ' Total Review', 'All Over Review', 'Weekly Review '];
  dataSource = []

  constructor(private dialog:MatDialog){}

  openDialog(){
    const dialogRef = this.dialog.open(AddStaffComponent )
  }
 
}
