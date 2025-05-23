import { Component, inject } from '@angular/core';
import {MatButtonModule,} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card'
import {MatChipsModule} from '@angular/material/chips';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatDialog,MatDialogModule} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import {MatSnackBar} from '@angular/material/snack-bar';
import { SnackBarComponent } from '../snack-bar/snack-bar.component';
import {MatBadgeModule} from '@angular/material/badge';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-material',
  imports: [MatButtonModule, MatIconModule, MatCardModule, MatChipsModule, MatFormFieldModule, FormsModule, MatInputModule, MatAutocompleteModule, ReactiveFormsModule, MatDialogModule, MatBadgeModule, CommonModule],
  templateUrl: './material.component.html',
  styleUrl: './material.component.css'
})
export class MaterialComponent {
  today = new Date();


  myControl = new FormControl<string | null>(null);

  dialog = inject(MatDialog);

  snackbar = inject(MatSnackBar)

  openDialog(enterAnimationDuration:string, exitAnimationDuration:string, message:string) {
    this.dialog.open(DialogComponent,{
      width: '400px',
      enterAnimationDuration,
      exitAnimationDuration,
      data: {
        dialog_message: message
      }
    });
  }

  openSnackBar() {
    this.snackbar.openFromComponent(SnackBarComponent, {
      duration: 3000,
      horizontalPosition: 'start',
      verticalPosition: 'top'
    })
  }


  first_name = '';
  last_name = '';
  username = '';

  generate() {
    this.first_name.slice(0, 1);
    this.last_name.slice(0, 4);

    this.username = this.first_name.slice(0, 3) + "_" + this.last_name.slice(0, 4);
  }

  details = {
    name: ' Dell latitude E7470',
    keyboard_light :true,
    processor : 'Intel Core i5',
    ram : '8GB',
    storage : '1TB',
    graphics_card : 'Nvidia 1050',
    screen_size : '15.6"',
  }
}
