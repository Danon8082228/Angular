import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { Item } from '../models/item.model';

@Component({
  selector: 'app-data',
  standalone: true,
  imports: [NgFor, ReactiveFormsModule],
  templateUrl: './data.component.html'
})
export class DataComponent implements OnInit {
  items: Item[] = [];
  form: FormGroup;

  constructor(private apiService: ApiService, private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      data: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.loadItems();
  }

  loadItems(): void {
    this.apiService.getItems().subscribe((response) => {
      this.items = response
    });
  }

  deleteItem(id: number): void {
    this.apiService.deleteItem(id).subscribe(() => {
      this.loadItems();
    });
  }

  addItem(): void {
    if (this.form.invalid) {
      return;
    }

    const newItem: Partial<Item> = {
      name: this.form.value.name,
      data: this.form.value.data
    };

    this.apiService.addItem(newItem).subscribe(() => {
      this.form.reset();
      this.loadItems();
    });
  }
}
