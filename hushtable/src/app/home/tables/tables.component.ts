import { Component } from '@angular/core';
import { MaterialModule } from '../../material.module';

@Component({
  selector: 'app-tables',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './tables.component.html',
  styleUrl: './tables.component.scss'
})
export class TablesComponent {

  displayedColumns: string[] = ['Table No', ' Total Review', 'All Over Review', 'Weekly Review '];
  dataSource = []

}
