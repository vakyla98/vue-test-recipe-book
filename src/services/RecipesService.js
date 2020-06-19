import axios from 'axios'

export class RecipesService {
    constructor(http) {
        this.http = http
    }
    async getAllRecipes() {
        let recipes = []
        await axios.get(this.http).then(res => {
            for (let prop in res.data) {
                recipes.push(res.data[prop])
            }
        })
        return recipes
    }
    async addRecipe(recipe) {
        await axios.post(this.http, {
            name: recipe.name,
            text: recipe.text,
            ingredients: recipe.ingredients,
            image: recipe.image,
        })
    }
}
