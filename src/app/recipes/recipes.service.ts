import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class RecipesService {
    recipesChanged = new Subject<Recipe[]>();

    private recipes: Recipe[] = [new Recipe('Hot dogs',
        'Delicious in a bun',
        'https://worldoffoodanddrink.worldtravelguide.net/wp-content/uploads/2019/09/shu-Gen-Hot-dog-123883960-1440x823.jpg',
        [
            new Ingredient('ketchup', 1),
            new Ingredient('bun', 2)
        ]),
    new Recipe('Muffins',
        'Fresh for breakfast',
        'https://image.shutterstock.com/image-photo/chocolate-chip-muffins-isolated-on-260nw-377473174.jpg',
        [
            new Ingredient('eggs', 2),
            new Ingredient('oil', 1)
        ])
    ];

    constructor() { }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    getRecipes() {
        return this.recipes.slice();
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, updatedRecipe: Recipe) {
        this.recipes[index] = updatedRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index:number){
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }
}
