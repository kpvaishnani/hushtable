import { Component, inject } from '@angular/core';
import { MaterialModule } from '../../../material.module';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-generate-code',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './generate-code.component.html',
  styleUrl: './generate-code.component.scss'
})
export class GenerateCodeComponent {

  readonly dialogRef = inject(MatDialogRef<GenerateCodeComponent>);

}
