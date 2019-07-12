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
  totalAmountToCart: number;

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.getItemsToCart();
    console.log(this.itemsToCart);
  }

  getItemsToCart(): void{
    this.itemService.getItemsToCart().subscribe(items => this.itemsToCart = items);
    this.calculateTotal();
  }

  calculateTotal(): void{
    this.totalAmountToCart=0;
    this.itemsToCart.forEach(element => {

      this.totalAmountToCart += (element.details.price * element.amount);
      
    });

  }

  getTotal(): number{

    return this.totalAmountToCart;
  }

}
