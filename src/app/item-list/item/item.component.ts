import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Item } from 'src/app/item.model';
import { ItemService } from 'src/app/item.service';
import { cartItem } from 'src/app/cartItem.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() item: Item;
  @Input() amountRequested: number;

 


  add(recivedItem,amountRequested){

    this.itemService.addItemsToCart(new cartItem(recivedItem,amountRequested));

  }


  constructor(private itemService: ItemService) { }

  ngOnInit() {
  }

}
