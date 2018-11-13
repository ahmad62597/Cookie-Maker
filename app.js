
var chocolateChipRecipe = {
	id: 'chocolate_chip',
	name:'Chocolate Chip Cookie',
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
	id: 'sugar_cookie',
	name: 'Sugar Cookie',
	ingredients: [],
	instructions: [],
	
}

var oatmealCookieRecipe = {
	id: 'oatmeal_cookie',
	name: 'Oatmeal Cookie',
	ingredients: [],
	instructions: [],
}

var ingredients =[];


//var cookieType = [];
var baseCookieRecipes = [chocolateChipRecipe, sugarCookieRecipe, oatmealCookieRecipe];
var baseRecipe ={};


//constructor for creating ingredients
function Ingredient(name, id){
    this.name = name;
		this.id = id;
		
    ingredients.push(this);
}

//constructor function for creating base cookie types
// Not needed since id and name are a part of the objects
// function CookieType(name,id){
//     this.name = name;
// 		this.id = id;
	
//     cookieType.push(this);
// }

//funciton to make all cookie objects
// function makeCookieType() {
//     var chocolate_chip_cookie = new CookieType('chocolate_chip_cookie', 'chocolate_chip_cookie');
//     var sugar_cookie = new CookieType('sugar_cookie' , 'sugar_cookie');
//     var oatmeal_cookie = new CookieType('oatmeal_cookie', 'oatmeal_cookie');
// }
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

//renders the ingredients to the page
function renderIngredients(){
    makeIngredients();
    var listEl = document.getElementById('ingredients-list');
    for(var i = 0; i < ingredients.length; i++){
        var liEl = document.createElement('li');
        var inputEl = document.createElement('input');
        
        inputEl.type = 'checkbox';
				inputEl.value = ingredients[i].name;
				inputEl.id = [i]+'id';
				//giving addOns a data attribute
				inputEl.dataset.extras = ingredients[i].id;

        var labelEl = document.createElement('label');
        labelEl.htmlFor= [i]+'id';
        labelEl.textContent = ingredients[i].name;
        
        console.log(labelEl);   
        listEl.appendChild(liEl);
        liEl.appendChild(inputEl);
        liEl.appendChild(labelEl);
        //inputEl.onclick = clickIngredient;
    } 
}

//renders base cookie type to the page
function renderCookieType(){
    //makeCookieType();
    var listEl = document.getElementById('cookie-type');
    
    for(var i = 0; i < baseCookieRecipes.length; i++){
        var liEl = document.createElement('li');
        var inputEl = document.createElement('input');
        

        inputEl.type = 'checkbox';
        inputEl.value = baseCookieRecipes[i].name;
        inputEl.id = baseCookieRecipes[i].id;
        //giving base cookies a data attribute
        inputEl.dataset.baseCookie = baseCookieRecipes[i].id;

        
        labelEl = document.createElement('label');
        labelEl.htmlFor= baseCookieRecipes[i].id;
        labelEl.textContent = baseCookieRecipes[i].name;
        
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

//event listener to see if boxes get checked

document.addEventListener('DOMContentLoaded', function(){
	document.addEventListener('click', function(event){
    var isChecked = event.target.checked;
    if (event.target.dataset.baseCookie){
       var baseCookie = event.target.checked;
      checkIfTrueBaseCookieRecipe(baseCookie, isChecked);
    }
    else if(event.target.dataset.extras) {
			console.log(event.target.dataset);
			var addOn = event.target.dataset.extras;
			checkIfTrueAddOns(addOn, isChecked);
    }
  })
})

function checkIfTrueBaseCookieRecipe(baseCookie, isChecked){
		if(isChecked){
			baseRecipe = baseCookies;
			//make baseRecipe show the directions
			console.log('baseRecipe', baseRecipe);
		}
}
checkIfTrueBaseCookieRecipe();

function checkIfTrueAddOns(addOn, isChecked){
	if(isChecked){
		baseCookieRecipes[0].ingredients.push(addOn);
		console.log(baseCookieRecipes[0].ingredients);
	}
}

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

