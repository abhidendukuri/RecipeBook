import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('test', 'test', 'https://www.w3schools.com/w3images/fjords.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.recipes.push(new Recipe('test', 'test', 'https://www.w3schools.com/w3images/fjords.jpg'));
  }

  onRemove() {
    this.recipes.pop();
  }

}
