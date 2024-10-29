import { Component } from '@angular/core';
import { MaterialModule } from '../../material.module';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-tables',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './tables.component.html',
  styleUrl: './tables.component.scss'
})
export class TablesComponent {

  displayedColumns: string[] = ['Table No', ' Total Review', 'All Over Review', 'Weekly Review '];
  dataSource = [];
  collection = 'qrCode'

  constructor(
    private commonService : CommonService,
    
  ){}

  ngOnInit(){
    this.getTables()
  }

  async getTables(){
    try{
    this.dataSource =   await this.commonService.getAll(this.collection)
    }
    catch(error){
      console.error(error)
    }
  }

}
