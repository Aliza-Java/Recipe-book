import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipesService } from '../recipes.service';

@Component({
    selector: 'app-recipe-detail',
    templateUrl: './recipe-detail.component.html',
    styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

    recipe: Recipe;
    id: number;

    constructor(private shoppingListService: ShoppingListService,
        private recipesService: RecipesService,
        private route: ActivatedRoute,
        private router: Router) { }

    ngOnInit() {
        const id = this.route.params.subscribe(
            (params: Params) => {
                this.id = +params['id'];
                this.recipe = this.recipesService.getRecipe(this.id);
            }
        );
        //this.recipe = this.shoppingListService.getRecipe(this.route.)
    }

    addToList() {
        this.shoppingListService.addIngredients(this.recipe.ingredients);
    }

    onEditRecipe() {
        this.router.navigate(['edit'], { relativeTo: this.route });
        //Also an option if necessary: up one, add id, add edit.
        //this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
    }

}
