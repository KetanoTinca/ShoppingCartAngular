import { Component, OnInit, Input } from '@angular/core';
import { ItemService } from '../item.service';
import { cartItem } from '../cartItem.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {


  itemsToCart: cartItem[] = [];

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.getItemsToCart();
    console.log(this.itemsToCart);
  }

  getItemsToCart(): void{
    this.itemService.getItemsToCart().subscribe(items => this.itemsToCart = items);
  }

}
