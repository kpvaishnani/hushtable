import { Component } from '@angular/core';
import { MaterialModule } from '../../../material.module';
import { AddItemComponent } from '../add-item/add-item.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-menu-items-list',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './menu-items-list.component.html',
  styleUrl: './menu-items-list.component.scss'
})
export class MenuItemsListComponent {

  displayedColumns: string[] = ['Dish', ' Total Review', 'All Over Review', 'Weekly Review '];
  dataSource = []

  constructor(private dialog:MatDialog){}

  openDialog(){
    const dialogRef = this.dialog.open(AddItemComponent)
  }
 
}
