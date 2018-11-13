//Define base recipes that add ons will be pushed to. These are the recipes that render if no add ons are selected
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
//this is the array that will collect all of the add-ons
var addOn =[];

//var cookieType = [];
var baseCookieRecipes = [chocolateChipRecipe, sugarCookieRecipe, oatmealCookieRecipe];

//sets default recipe to sugarCookie
var baseRecipe = sugarCookieRecipe;



//constructor for creating add ons. this constructor will be pushed into add on array
function AddOn(name, id){
    this.name = name;
		this.id = id;
		
    addOn.push(this);
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

//this function makes all of the add ons that will populate the add-on array
function makeAddOns(){
    var chocolate_chip = new AddOn('chocolate_chip', 'chocolate_chip');
    var coconut = new AddOn('coconut', 'coconut');
    var peanut_butter = new AddOn('peanut_butter', 'peanut_butter');
    var cinnamon = new AddOn('cinnamon', 'cinnamon');
    var sprinkles = new AddOn('sprinkles', 'sprinkles');
    var frosting = new AddOn('frosting', 'frosting');
    var nuts = new AddOn('nuts', 'nuts');
}

//renders the add ons to the page
function renderAddOns(){
    makeAddOns();
    var listEl = document.getElementById('addon-list');
    for(var i = 0; i < addOn.length; i++){
        var liEl = document.createElement('li');
        var inputEl = document.createElement('input');
        
        inputEl.type = 'checkbox';
				inputEl.value = addOn[i].name;
				inputEl.id = [i]+'id';
				//giving addOns a data attribute
				inputEl.dataset.extras = addOn[i].id;

        var labelEl = document.createElement('label');
        labelEl.htmlFor= [i]+'id';
        labelEl.textContent = addOn[i].name;   
        listEl.appendChild(liEl);
        liEl.appendChild(inputEl);
        liEl.appendChild(labelEl);
        //inputEl.onclick = clickIngredient;
    } 
}

//renders base cookie type to the page
function renderCookieType(){
    var listEl = document.getElementById('cookie-type');
    
    for(var i = 0; i < baseCookieRecipes.length; i++){
        var liEl = document.createElement('li');
        var inputEl = document.createElement('input');
        

        inputEl.type = 'radio';
        inputEl.name = 'cookies'
        liEl.id = [i]+'-cookie'
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
//calls the render functions to create cookie type and add on
renderCookieType();
renderAddOns();



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
    console.log('even in add event listener', event.target);
    if (event.target.id){
       var baseCookie = event.target.id;
       console.log('base Cookie' , baseCookie)
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
			baseRecipe = baseCookie;
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

function renderRecipe() {
    console.log(baseRecipe);
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
        console.log('base recipe in render ingreidents' , baseRecipe);
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


//This is for specifically printing the instructions from the recipe
function printDiv(printDiv) {

    var printContents = document.getElementById("print-recipe").innerHTML;
    w=window.open();
    w.document.write(printContents);
    w.print();
    w.close();
   }