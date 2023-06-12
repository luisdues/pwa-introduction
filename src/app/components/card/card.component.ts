import { Component, Input } from '@angular/core';
import { Item } from '../../models/item.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() item: Item | undefined;
}
