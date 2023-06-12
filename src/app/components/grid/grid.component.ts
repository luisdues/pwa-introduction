import { Component, Input, OnInit } from '@angular/core';
import { ComponentListService } from 'src/app/services/component-list.service';
import { Item } from '../../models/item.interface';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css'],
})
export class GridComponent implements OnInit {
  displayedColumns: string[] = ['id', 'title'];
  dataSource: Item[] = [];
  @Input() item: Item | undefined;
  constructor(private componentListService: ComponentListService) {}

  ngOnInit() {
    this.componentListService.getAllItems().subscribe((items: Item[]) => {
      this.dataSource = items;
    });
  }
}
