import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item.interface';
import { ComponentListService } from 'src/app/services/component-list.service';

@Component({
  selector: 'app-component-list',
  templateUrl: './component-list.component.html',
  styleUrls: ['./component-list.component.css'],
})
export class ComponentListComponent implements OnInit {
  items: Item[] = [];
  loading = true;
  itemsLoaded = false;
  showList = false;
  viewType: string = 'cards';

  constructor(private componentListService: ComponentListService) {}

  ngOnInit(): void {
    this.getComponentList();
  }

  getComponentList() {
    this.componentListService.getAllItems().subscribe(
      (items) => {
        this.items = items;
        this.loading = false;
        this.itemsLoaded = true;
        this.showList = true;
      },
      (error) => {
        console.log(error);
        this.loading = false;
      }
    );
  }

  toggleView(viewType: string) {
    this.viewType = viewType;
  }
}
