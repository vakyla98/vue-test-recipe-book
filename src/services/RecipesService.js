import axios from 'axios'

export class RecipesService {
    constructor(http) {
        this.http = http
        this.fullHttp = http + '.json'
    }
    async getAllRecipes() {
        let recipes = []
        await axios.get(this.fullHttp).then(res => {
            //change data structure from nested object to array of objects
            for (let prop in res.data) {
                res.data[prop].key = prop // add key into object for put and delete methods
                recipes.push(res.data[prop])
            }
        })
        console.log(recipes)
        return recipes
    }
    async addRecipe(recipe) {
        await axios.post(this.fullHttp, {
            name: recipe.name,
            text: recipe.text,
            ingredients: recipe.ingredients,
            image: recipe.image,
        })
    }
    async deleteRecipe(key) {
        await axios.delete(this.http + '/' + key + '.json') 
        //creating link look like https://recope-book.firebaseio.com/recipes/key.json -> where
        //key is recipe key,
        //recope-book - name of my project,
        //recipes - path to data
        //.json - type of output data
    }
}
