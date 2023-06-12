import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from 'src/app/models/item.interface';
import { ComponentListService } from 'src/app/services/component-list.service';

@Component({
  selector: 'app-component-detail',
  templateUrl: './component-detail.component.html',
  styleUrls: ['./component-detail.component.css'],
})
export class ComponentDetailComponent implements OnInit {
  item: Item | null = null;
  showDetails: boolean = false;
  toggleExpansionPanel(): void {
    this.showDetails = !this.showDetails;
  }
  constructor(
    private componentListService: ComponentListService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const identifier = this.activatedRoute.snapshot.paramMap.get('phone');
    console.log('Identifier --> ', identifier);

    if (!identifier) {
      this.router.navigateByUrl('/').then(() => {
        console.log('Redirection completed');
      });
      return;
    }

    this.componentListService
      .getItemsById(identifier)
      .subscribe((item: Item) => {
        if (!item) {
          this.router.navigateByUrl('/').then(() => {
            console.log('Redirection completed');
          });
          return;
        }
        this.item = item;
        console.log('Item --> ', this.item.name);
      });
  }
}
