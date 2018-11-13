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
    ingredients: ['5 cups flour', 
    '3 eggs', 
    '1 cup butter', 
    '3/4 cup sugar', 
    '3/4 cups brown sugar', 
    '1 tps salt', 
    '1 tsp vannila', 
    '1 tsp baking power',
    '1 cup chocola chips'],
    instructions: ['[rehead oven to 350',
    'Cream butter with sugar until smooth',
    'beat eggs until barely mixed, add eggs to butter mixture, beat throuroly',
    'add flour and other dry ingredients',
    'add chocolate chips',
    'roll into 1 inch ball, place on ungreated baking sheet, and bake for 20 minutes'],
}
var sugarCookieRecipe = {
    ingredients: [],
    instructions: [],
    
}

var oatmealCookieRecipe = {
    ingredients: [],
    instructions: [],
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

//ignore this function!
function renderRecipe() {
    //create parent elements
    var recipeEl = document.getElementById('recipe');
    var titleEl = document.createElement('h3');
    //append elements
    recipeEl.appendChild(titleEl);
    //add text content to title
    titleEl.textContent = 'Your Recipe';

    function renderIngredientsList (){
        var ulEl = document.createElement('ul')
        for (var i = 0; i < baseRecipe.ingredients.length; i++){
            var liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent=baseRecipe.ingredients[i];
        } console.log('running')  
    }

     function renderInstructions (){
         var ulEl = document.createElement('ul')
         for (var i =0; i < baseRecipe.ingredients.length; i++){
             var liEl=document.createElement('li')
             ulEl.appendChild(liEl);
             liEl.textContent=baseRecipe.ingredients[i];
         }

     }
   
renderIngredientsList();
renderInstructions();
console.log('This code is running')
}
renderRecipe();

