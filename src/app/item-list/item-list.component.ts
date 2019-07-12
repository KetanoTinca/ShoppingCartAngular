import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Item } from '../item.model';
import { ItemService } from "../item.service";

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  items: Item[];
  itemsToCart: Item[] = [];

  onAdd(itemRecived: Item) {

    this.itemsToCart.push(itemRecived);

  }

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.getItems();
  }

  getItems(): void{
    this.itemService.getItems().subscribe(items => this.items = items);
  }

}
