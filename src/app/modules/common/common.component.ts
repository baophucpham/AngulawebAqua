import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-common',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.scss'],
})
export class CommonComponent implements OnInit {
  constructor() { }

  items: MenuItem[] = [];

  public viewportHeight: any;

  ngOnInit() {
    this.items = [
      {
        label: 'File',
        items: [
          { label: 'New', icon: 'pi pi-plus' },
          { label: 'Open', icon: 'pi pi-download' },
        ],
      },
      {
        label: 'Edit',
        items: [
          { label: 'Undo', icon: 'pi pi-refresh' },
          { label: 'Redo', icon: 'pi pi-repeat' },
        ],
      },
    ];
  }
}
