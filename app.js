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
        var inputEl = document.createElement('input');
        
        inputEl.type = 'checkbox';
        inputEl.value = ingredients[i].name;
        inputEl.id = [i]+'id';

        labelEl = document.createElement('label');
        labelEl.htmlFor= [i]+'id';
        labelEl.textContent = ingredients[i].name;
        
        console.log(labelEl);   
        listEl.appendChild(inputEl);
        listEl.appendChild(labelEl);
        //inputEl.onclick = clickIngredient;
    } 
}

function renderCookieType(){
    makeCookieType();
    var listEl = document.getElementById('cookie-type');
    for(var i = 0; i < cookieType.length; i++){
        var inputEl = document.createElement('input');
        
        inputEl.type = 'checkbox';
        inputEl.value = cookieType[i].name;
        inputEl.id = [i]+'-cookie';
        
        labelEl = document.createElement('label');
        labelEl.htmlFor= [i]+'-cookie';
        labelEl.textContent = cookieType[i].name;
        
        console.log(labelEl);   
        listEl.appendChild(inputEl);
        listEl.appendChild(labelEl);
        //inputEl.onclick = clickIngredient;
    } 
}
renderCookieType();
renderIngredients();

function checkIfTrue(){
	var checkBox = document.getElementById('0-cookie');
	if(checkBox.checked === true){
		console.log('is checked true?', checkBox.value);
	}
}
checkIfChecked();
// function clickIngredient(event){
// 	if(/*event is checked*/){
// 		var recipeEl = document.getElementById('recipe');
// 		var ingredientsEl = document.createElement('ul');
// 		ingredientsEl.textContent = event.target.dataset.name;
// 		recipeEl.appendChild(ingredientsEl);
// 	}	
// }


//BOTTONS
//Set global variables:
var reset = document.getElementById('reset');
//Add an event listener:
reset.addEventListener('click', resetSurvey);
//Call the function after you click the reset button:
function resetSurvey() {
  location.reload();
}


function renderRecipe() {
    //create parent elements
    var recipeEl = document.getElementById('recipe');
    var titleEl = document.createElement('h3');
    //append elements
    recipeEl.appendChild(titleEl);
    //add text content to title
    titleEl.textContent = 'Your Recipe';

    function renderIngredientsList (){
        var ingredientsEl = document.createElement('ul');
        recipeEl.appendChild(ingredientsEl);
    }

    function renderInstructions (){
        var instructionsEl = document.createElement('ol');
        recipeEl.appendChild(instructionsEl);

        
        var stepList = [];
        function StepList (stepNumber, instructions){
            this.stepNumber = stepNumber;
            this.instructions = instructions;

            stepList.push(this);
        }

        //ignore all these variables, they're place holders until daniel gives me some variables from the click-clicky

        var sprinkles;
        var sugar_cookies;
        var oatmeal;

        function populateStepList (){
            new StepList ('One', 'Cream your butter and sugar until smoothe.');
            new StepList ('Two', 'Beat eggs until barely mixed, then add to butter and sugar mixture. Beat well.');
            new StepList ('Three','Add dry ingredients (flour, salt, baking soda) and mix');
            if (sprinkles) {
                new StepList ('Four' , 'add sprinkles')
            };
            if (sugar_cookies) {
                new StepList ('Five','Chill cookies 1 hour, roll out to 1/2 to 1.4 inch, cut out and place on greased tray')
            } else {
                new StepList ('Five', 'Roll cookies into 1 inch balls and set on ungreased cookie tray')
            };
            if (sugar_cookies) {
                new StepList ('Six','Bake at whatever temperate');
            } else if (oatmeal) {
                new StepList ('Six' , 'Bake at a different temperate');
            } else {
                new StepList ('Six', 'bake cookies!!')
            }
            new StepList ('Seven', 'enjoy your cookies');

            console.log(stepList);
        }
        populateStepList();
        console.log(stepList);

        for (var i = 0; i < stepList.length; i++){
            var liEl = document.createElement('li');
            liEl.textContent = stepList[i].instructions;
            console.log(liEl);
            instructionsEl.appendChild(liEl);
        }

    }
renderInstructions();
renderIngredientsList();
}
renderRecipe();
