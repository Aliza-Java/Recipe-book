import { Injectable } from '@angular/core';
import {Subject } from 'rxjs';

import { Ingredient } from '../shared/ingredient.model';

@Injectable({
    providedIn: 'root'
})
export class ShoppingListService {
    //Subject is similar to Event Emitter, but more recommended if not using @Output()
ingredientsChanged = new Subject<Ingredient[]>();
   private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
    ];

    constructor() { }

    addIngredient(newIngredient: Ingredient) {
        this.ingredients.push(newIngredient);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    //A separate method for multiple ingredients added, in order to emit one event only.
    addIngredients(newIngredients:Ingredient[]){
        this.ingredients.push(...newIngredients);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    getIngredients(){
        return this.ingredients.slice();

    }
}
