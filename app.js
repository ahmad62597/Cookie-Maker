
var chocolateChipRecipe = {
	id: 'chocolate_chip',
	name:'Chocolate Chip Cookie',
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
	id: 'sugar_cookie',
	name: 'Sugar Cookie',
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
	id: 'oatmeal_cookie',
	name: 'Oatmeal Cookie',
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

var ingredients =[];


//var cookieType = [];
var baseCookieRecipes = [chocolateChipRecipe, sugarCookieRecipe, oatmealCookieRecipe];
var baseRecipe;


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
        

        inputEl.type = 'radio';
        inputEl.name = 'cookies'
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
    for (var i = 0; i < baseCookieRecipes.length; i++ ){
        var checkBox = document.getElementById([i]+'-cookie');
        if(checkBox.checked === true){
						baseRecipe = baseCookieRecipes[i];
						//make baseRecipe show the directions
            console.log('baseRecipe', baseRecipe);
        }
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

