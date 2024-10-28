import { Component } from '@angular/core';
import { MaterialModule } from '../../../material.module';
import { AddItemComponent } from '../add-item/add-item.component';
import { MatDialog } from '@angular/material/dialog';
import { CommonService } from '../../../services/common.service';
import { DeleteDialogComponent } from '../../../common/delete-dialog/delete-dialog.component';

@Component({
  selector: 'app-menu-items-list',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './menu-items-list.component.html',
  styleUrl: './menu-items-list.component.scss'
})
export class MenuItemsListComponent {

  displayedColumns: string[] = ['Dish', ' Total Review', 'All Over Review', 'Weekly Review', 'actions'];
  dataSource:any= [];
  collection = 'menu';

  constructor(
    private dialog:MatDialog,
    private commonService : CommonService
  ){}

  ngOnInit(){
    this.getMenuList()
  }

 async openDialog(menuData?:any){
    const dialogRef:any = this.dialog.open(AddItemComponent , {data : {menuData}});
    dialogRef.afterClosed().subscribe((result: any) => {
        this.dataSource.push(result);
        this.getMenuList()
    });
  }

 async getMenuList(){
    try{
      const result = await this.commonService.getAll(this.collection);
      this.dataSource = result;
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
            this.getMenuList(); 
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
