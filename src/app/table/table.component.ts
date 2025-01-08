import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {
  formData: any[] = [];

  saveData(a: any) {
    this.formData.push(a.value);
    a.resetForm();
    // console.log(a.firstName);
  }
}
