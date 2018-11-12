//array with ingredients
//constructor for each ingredient
//ul tag to append to html which will need a loop
//clicky-clicky
//test
var ingredients =[];

function Ingredient(name, id){
    this.name = name;
    this.id = id;
    ingredients.push(this);
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
