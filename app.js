//array with ingredients
//constructor for each ingredient
//ul tag to append to html which will need a loop
//clicky-clicky
//test
var ingredients =[];

function Ingredient(name, id){
    this.name = name;
    this.id = id;
    this.push(ingredients);
}
function makeIngredients(){
    var oatmeal = new Ingredient('oatmaeal', 'oatmeal');
    var chocolate_chip = new Ingredient('chocolate_chip', 'chocolate_chip');
    var sugar_cookie = new Ingredient('sugar_cookie', 'sugar_cookie');
    var coconut = new Ingredient('coconut', 'coconut');
    var peanut_butter = new Ingredient('peanut_butter', 'peanut_butter');
    var cinnamon = new Ingredient('cinnamon', 'cinnamon');
    var sprinkles = new Ingredient('sprinkles', 'sprinkles');
    var frosting = new Ingredient('frosting', 'frosting');
    var nuts = new Ingredient('nut', 'nuts');
}
makeIngredients();
console.log('ingredient', ingredients);