import axios from 'axios'
import restructure from '../helpers/changeStructure.js'
import backup from '../recipes-backup.js'

export class RecipesService {
    constructor(http) {
        this.http = http + '/recipes'
        this.fullHttp = this.http + '.json'
    }
    async fetchAllRecipes() {
        let recipes = await axios
            .get(this.fullHttp)
            .then(res => restructure(res.data))
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
    }
    async saveRecipe(recipe) {
        await axios.put(this.http + '/' + recipe.key + '.json', {
            name: recipe.name,
            text: recipe.text,
            ingredients: recipe.ingredients,
            image: recipe.image,
        })
    }
    async restoreRecipes() {
        await axios.put(this.fullHttp, backup)
    }
}
