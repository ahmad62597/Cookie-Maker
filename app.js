//array with ingredients
//constructor for each ingredient
//ul tag to append to html which will need a loop
//clicky-clicky
//test
var ingredients =[];
var cookieType = [];


function Ingredient(name, id){
    this.name = name;
    this.id = id;
    ingredients.push(this);
}

function CookieType(name,id){
    this.name = name;
    this.id = id;
    cookieType.push(this);
}

function makeCookieType() {
    var chocolate_chip_cookie = new CookieType('chocolate_chip_cookie', 'chocolate_chip_cookie');
    var sugar_cookie = new CookieType('sugar_cookie' , 'sugar_cookie');
    var oatmeal_cookie = new CookieType('oatmeal_cookie', 'oatmeal_cookie');
}
//create the ingredient objects
function makeIngredients(){
    var chocolate_chip = new Ingredient('chocolate_chip', 'chocolate_chip');
    var coconut = new Ingredient('coconut', 'coconut');
    var peanut_butter = new Ingredient('peanut_butter', 'peanut_butter');
    var cinnamon = new Ingredient('cinnamon', 'cinnamon');
    var sprinkles = new Ingredient('sprinkles', 'sprinkles');
    var frosting = new Ingredient('frosting', 'frosting');
    var nuts = new Ingredient('nuts', 'nuts');
}

function renderIngredients(){
    makeIngredients();
    var listEl = document.getElementById('ingredients-list');
    for(var i = 0; i < ingredients.length; i++){
        var liEl = document.createElement('li');
        var inputEl = document.createElement('input');
        
        inputEl.type = 'checkbox';
        inputEl.value = ingredients[i].name;
        inputEl.id = [i]+'id';

        labelEl = document.createElement('label');
        labelEl.htmlFor= [i]+'id';
        labelEl.textContent = ingredients[i].name;
        
        console.log(labelEl);   
        listEl.appendChild(liEl);
        liEl.appendChild(inputEl);
        liEl.appendChild(labelEl);
        //inputEl.onclick = clickIngredient;
    } 
}

function renderCookieType(){
    makeCookieType();
    var listEl = document.getElementById('cookie-type');
    
    for(var i = 0; i < cookieType.length; i++){
        var liEl = document.createElement('li');
        var inputEl = document.createElement('input');
        
        inputEl.type = 'radio';
        inputEl.value = cookieType[i].name;
        inputEl.id = [i]+'-cookie';
        inputEl.name = 'cookie'
        
        labelEl = document.createElement('label');
        labelEl.htmlFor= [i]+'-cookie';
        labelEl.textContent = cookieType[i].name;
        
        listEl.appendChild(liEl);
        liEl.appendChild(inputEl);
        liEl.appendChild(labelEl);
        //inputEl.onclick = clickIngredient;
    } 
}
renderCookieType();
renderIngredients();



//BUTTONS
//Set global variables:
var reset = document.getElementById('reset');
//Add an event listener:
reset.addEventListener('click', resetSurvey);
//Call the function after you click the reset button:
function resetSurvey() {
  location.reload();
}

//Pay attention to this stuff
var chocolateChipRecipe = {
    ingredients: ['1 cup butter',
        '3/4 cups sugar',
        '3/4 cups brown sugar',
        '1 teaspoon vanilla',
        '2 large eggs',
        '2 1/4 cups flour',
        '1 tsp baking soda',
        '1 tsp salt',
        '2 cups chocolate chips',
        ],
    instructions: ['Preheat Oven to 375',
        'Cream butter and sugar together',
        'Beat in eggs and vanilla',
        'Beat in flour, salt and baking powder',
        'Mix in chocolate chips',
        'Drop balls into one inch balls into an ungreased cookie tray',
        'Bake 9 to 11 minutes, cool on a wire rack.'
        ],
}
var sugarCookieRecipe = {
    ingredients: ['1/2 cup Sugar',
        '1/2 cup Butter',
        '1 tsp Vanilla',
        '2 eggs',
        '2 1/2 cup Flour, sifted',
        '2 tsp double-acting baking powder',
        '1/2 tsp salt'
        ],
    instructions: ['Cream butter and sugar together.',
        'Beat in eggs and vanilla', 
        'Add and mix in dry ingredients',
        'Chill for 3-4 hours',
        'Preheat Oven to 350 degrees',
        'Roll cookies to a 1/4 - 1/2 thickness. Use a cookie cutter to shape cookies.',
        'Place cookies on greased cookie sheet.',
        'Bake 7 to 12 minutes. Cool on wire rack.'],
}

var oatmealCookieRecipe = {
    ingredients: ['1/2 cup butter',
        '1/2 cup sugar',
        '1/2 cup brown sugar',
        '1 egg',
        '1 tsp vanilla',
        '1 tbsp milk',
        '1 cup sifted flour',
        '1/2 tsp baking soda',
        '1/2 tsp baking powder',
        '1/2 tsp salt',
        '1 cup uncooked quick oats (I like quakers)',
        ],
    instructions: [
        'Cream butter and sugar together',
        'Beat in eggs, milk and vanilla',
        'Add and mix in dry ingredients except oats',
        'When smooth, mix in oats',
        'Beat mixture well',
        'Drop cookies in 1 inch balls onto a greased cookie sheet',
        'Bake 10 to 12 minutes. Cool on wire wrack'
    ],
}
var baseRecipe = chocolateChipRecipe;
var baseCookieRecipes = [chocolateChipRecipe, sugarCookieRecipe, oatmealCookieRecipe];
document.addEventListener('DOMContentLoaded', function(){
    document.addEventListener('click', function(event){
        if (event.target.checked){
            checkIfTrue();
        }
    })
})
function checkIfTrue(){
    for (var i = 0; i < baseCookieRecipes.length; i++ ){
        var checkBox = document.getElementById([i]+'-cookie');
        if(checkBox.checked === true){
            baseRecipe = baseCookieRecipes[i];
            console.log('baseRecipe', baseRecipe);
        }
    }
}
checkIfTrue();


var finalRecipe = baseRecipe;
//temp variable
for (var j = 0; j < ingredients.length; j ++){
    var thingIsClicked = document.getElementById([j]+'id');
    if (thingIsClicked === true){
        var thingClicked = thingIsClicked.name;
    }
}
//basic logic 
if (baseRecipe === chocolateChipRecipe){
    if (thingClicked) {
        finalRecipe.ingredients.push('name')
        finalRecipe.instructions.splice(1, 0, 'name instructions');
    }
    // if if if else
} else if (baseRecipe === oatmealCookieRecipe){
    if (thingClicked) {
    }
    // if if if else
} else { //default is sugar cookie
    if (thingClicked) {
    } 
}
//ignore this function!
function renderRecipe() {
    recipeElCheck = document.getElementById('recipe');
    if (recipeElCheck){
        recipeElCheck.remove();
    }
    //create parent elements4
    var recipeSection = document.getElementById('recipe-section');
    var recipeEl = document.createElement('div');
    var titleEl = document.createElement('h3');
    //append elements
    recipeSection.appendChild(recipeEl);
    recipeEl.appendChild(titleEl);
    //add text content to title
    titleEl.textContent = 'Your Recipe';
    recipeEl.id = 'recipe';

    function renderIngredientsList (){
        var ulEl = document.createElement('ul')
        recipeEl.appendChild(ulEl);
        for (var i = 0; i < baseRecipe.ingredients.length; i++){
            var liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent=baseRecipe.ingredients[i];
        } console.log('running')  
    }

     function renderInstructions (){
         var olEl = document.createElement('ol')
         recipeEl.appendChild(olEl);
         for (var i =0; i < baseRecipe.instructions.length; i++){
             var liEl=document.createElement('li')
             olEl.appendChild(liEl);
             liEl.textContent=baseRecipe.instructions[i];
         }

     }
   
renderIngredientsList();
renderInstructions();
console.log('This code is running')
}

var buttonEl = document.createElement('button');
var divEl = document.getElementById('pick-cookie');
divEl.appendChild(buttonEl);
buttonEl.textContent = 'Get My Cookie!'


buttonEl.addEventListener('click', function(){
    // event.preventDefault();
    console.log('the button works')
    renderRecipe();
});



