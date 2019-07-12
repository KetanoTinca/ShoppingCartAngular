import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Item } from 'src/app/item.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() item: Item;
  @Input() amountRequested: number;

  @Output() addToCart = new EventEmitter<any>();


  add(recivedItem,amountRequested){

    this.addToCart.emit({item: recivedItem, amount: amountRequested});

  }


  constructor() { }

  ngOnInit() {
  }

}
