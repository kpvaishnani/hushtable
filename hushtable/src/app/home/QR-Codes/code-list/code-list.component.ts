import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../../../material.module';
import { GenerateCodeComponent } from '../generate-code/generate-code.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-code-list',
  standalone: true,
  imports: [RouterModule,MaterialModule ],
  templateUrl: './code-list.component.html',
  styleUrl: './code-list.component.scss'
})
export class CodeListComponent {

  displayedColumns: string[] = ['QId', 'QRCode', 'TableNo','action'];
  dataSource =  [
    {QId: 1, QRCode: 'Hydrogen', TableNo: 1.0079},
    
  ];

  constructor(private dialog:MatDialog){}

  openDialog(){
    const dialogRef = this.dialog.open(GenerateCodeComponent )
  }
}
