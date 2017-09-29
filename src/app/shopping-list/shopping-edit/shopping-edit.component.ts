import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  name = "";
  amount = 0;
  ingredients: Ingredient[] = [];
  constructor() {}

  ngOnInit() {
  }

  onAdd() {
    this.ingredients.push(new Ingredient(this.name, this.amount));
  }

  onDelete() {
    this.ingredients.pop();
  }

}
