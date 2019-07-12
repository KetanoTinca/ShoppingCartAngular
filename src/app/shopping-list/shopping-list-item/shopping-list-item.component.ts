import { Component, OnInit, Input } from '@angular/core';
import { cartItem } from 'src/app/cartItem.model';

@Component({
  selector: 'app-shopping-list-item',
  templateUrl: './shopping-list-item.component.html',
  styleUrls: ['./shopping-list-item.component.css']
})
export class ShoppingListItemComponent implements OnInit {

  @Input() item: cartItem;

  constructor() { }

  ngOnInit() {
    console.log(this.item);
  }

}
