//Define base recipes that add ons will be pushed to. These are the recipes that render if no add ons are selected.
// They are made up of a name, id, ingredients array and instructions array
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
//this is the array that will collect all of the add-ons made by the construtor function
var addOn =[];

//constructor for creating add ons. this constructor will be pushed into add on array. It includes a name, and id, the instructions(addDIrections) and the amount
function AddOn(name, id, addDirections, amount){
    this.name = name;
    this.id = id;
    this.addDirections = addDirections;
    this.amount = amount;
    //push objects into array
    addOn.push(this);
}
//this functions holds all the new add ons that go into the array
function makeAddOns(){
    var chocolate_chip = new AddOn('chocolate_chip', 'chocolate_chip', 'Mix in Chocolate Chips', '1 cup');
    var coconut = new AddOn('coconut', 'coconut', 'Mix in Coconut', '1 cup');
    var peanut_butter = new AddOn('peanut_butter', 'peanut_butter', 'Mix in Peanut Butter until smooth', '1 cup');
    var cinnamon = new AddOn('cinnamon', 'cinnamon', 'Mix in Cinnamon', '1 tsp');
    var sprinkles = new AddOn('sprinkles', 'sprinkles', 'Sprinkle the sprinkles over the uncooked cookies', '1/2 cup');
    var frosting = new AddOn('frosting', 'frosting', 'Once cool, add frosting', '1 can');
    var nuts = new AddOn('nuts', 'nuts', 'Mix in Nuts', '1 cup');
    //TODO: add more options
}

//call makeAddOns function
makeAddOns();
//define the counter for the for loop when we append the add ons
var extraCounter = addOn.length;


//renders the add ons to the page. this function will be called twice, rendering addOn set One and addOn set Two
function renderAddOns(addOnNumber){
    //grabs the div element from the html
    var divEl = document.getElementById('add-ons');
    //create an unordered list that will hold all of the add on
    var listEl = document.createElement('ul');
    //anchor the list to the div
    divEl.appendChild(listEl);
    //create a title for each of the two lists based on addOnNumber
    listEl.textContent = 'Add On '+ addOnNumber;
    //create a for loop to populate list. we also create the type, value, id and name for each input element
    for(var i = 0; i < extraCounter; i++){
        var liEl = document.createElement('li');
        var inputEl = document.createElement('input');
        //the list items hold the input, which is where we assign all our data for later
        inputEl.type = 'radio';
        inputEl.value = addOn[i].name+addOnNumber;
        inputEl.id = [i]+'id';
        inputEl.name = 'add_ons'+addOnNumber;
        //the lable is linked to the input by the id, the lable holds the actual text content
        var labelEl = document.createElement('label');
        labelEl.htmlFor= [i]+'id';
        labelEl.textContent = addOn[i].name;   
        listEl.appendChild(liEl);
        liEl.appendChild(inputEl);
        liEl.appendChild(labelEl);
        //inputEl.onclick = clickIngredient;
    } 
}


renderAddOns('one');
renderAddOns('two');

//BUTTONS
//Set global variables:
var reset = document.getElementById('reset');
//Add an event listener:
reset.addEventListener('click', resetSurvey);
//Call the function after you click the reset button:
function resetSurvey() {
  location.reload();
}


//define my variables for the event listener
var cookieTypeSelected;
var firstAddOn;
var secondAddOn;
//grab my submit and form elements from the html
var submitEl = document.getElementById('get-cookie');
var formEl = document.getElementById ('form-one')
//create an advent listener for the entire form, using the submit button
formEl.addEventListener('submit', function(event){
    event.preventDefault();
    console.log(event.target.base_cookie_choice);
    //function that grabs our baseCookieChoice and assigns it to the cookieTypeSelected for later(when we render)
    //get elements
    var cookieBackground = document.getElementById('cookie1')
    var cookieImg = document.getElementById('cookieImg');
    function baseCookieChoice(){
        if (event.target.base_cookie_choice.value === 'chocolate_chip'){
            console.log('chocolate_chip');
            cookieTypeSelected = chocolateChipRecipe;
            console.log(cookieTypeSelected);
            cookieBackground.className = 'chocolate'
            cookieImg.src = './assets/chocolate_chip.jpg'

        }
        if (event.target.base_cookie_choice.value === 'sugar_cookie'){
            console.log('sugar_cookie');
            cookieTypeSelected = sugarCookieRecipe;
            console.log(cookieTypeSelected);
            cookieBackground.className = 'sugar'
            cookieImg.src = './assets/sugar_cookie.jpg'
        }
        if (event.target.base_cookie_choice.value === 'oatmeal_cookie'){
            console.log('oatmeal_cookie');
            cookieTypeSelected = oatmealCookieRecipe;
            console.log(cookieTypeSelected);
            cookieBackground.className = 'oatmeal'
            cookieImg.src = './assets/oatmeal.jpg'

        }
    }
    //function that grabs the add ons.
    //this is a hot mess, but it works
    function addOnCookieChoice(){
        console.log(event.target.add_onsone.value)
        console.log(event.target.add_onstwo.value)
        //we specified extraCounter a long time ago when we rendered our add on lists
        for (var i = 0; i < extraCounter; i ++){
            var itemNameOne = addOn[i].name + 'one' //sets up itemNameOne so it will match with the selected item
            console.log('itemNameOne', itemNameOne);
            if (event.target.add_onsone.value === itemNameOne){
                console.log('yay');
                firstAddOn = addOn[i];
                console.log(firstAddOn)
            }
        }
        //same thing but for the second add on list
        for (var j = 0; j < extraCounter; j ++){
            var itemNameTwo = addOn[j].name + 'two'
            console.log('itemNameTwo', itemNameTwo);
            if (event.target.add_onstwo.value === itemNameTwo){
                console.log('yay');
                secondAddOn = addOn[j];
                console.log(secondAddOn)
            }
        }

    }
    //calls the awesome functions we just made
    baseCookieChoice();
    addOnCookieChoice();
    renderRecipe();
})



//RENDER
//YAY FUN STUFF
function renderRecipe() {
    if(localStorage.getItem('recipes')){
        var recipeJSON = localStorage.getItem('recipes', recipeJSON);
        var recipeHistory = JSON.parse(recipeJSON);
        console.log(recipeHistory);
    }
    else {
        recipeHistory = [];
    }
    //this section makes sure that the recipe re-renders on each submit
    recipeElCheck = document.getElementById('recipe');
    if (recipeElCheck){
        recipeElCheck.remove();
    }
    //this section anchors us into the html and creates our div and header
    var recipeSection = document.getElementById('recipe-box');
    var recipeEl = document.createElement('div');
    var titleEl = document.createElement('h3');
    //append elements
    recipeSection.appendChild(recipeEl);
    recipeEl.appendChild(titleEl);
    //add text content to title
    titleEl.textContent = 'Your Recipe';
    recipeEl.id = 'recipe';
    //this section defines what recipe we are going to start with as our base recipe before add ons
    var recipe = cookieTypeSelected;
    console.log('recipe', recipe)
    //this function will push or splice our addons information into our base recipe.
    function createRecipe(){
        var toppingImg1 = document.getElementById('img-topping1');
        var toppingImg2 = document.getElementById('img-topping2');
        //this part adds the amount and name of each add on to the ingredient list
        recipe.ingredients.push(firstAddOn.amount + ' ' + firstAddOn.name);
        recipe.ingredients.push(secondAddOn.amount + ' ' + secondAddOn.name);
        //this splices the addDirections property from the add ons into the instructions array
        //this one is for chocolate chip cookies
        //TODO: add logic for new add-ins
        //TODO: improve logic for amounts based on cookie selections
        if (recipe === chocolateChipRecipe){
            //chocolate chips
            if (firstAddOn === addOn[0] ||secondAddOn === addOn[0]){
                recipe.instructions.splice(5, 0, addOn[0].addDirections)
            }
            //coconut
            if (firstAddOn === addOn[1]||secondAddOn === addOn[1]){
                recipe.instructions.splice(5, 0, addOn[1].addDirections)
            }
            //peanut butter
            if (firstAddOn === addOn[2]||secondAddOn === addOn[2]){
                recipe.instructions.splice(3, 0, addOn[2].addDirections)  
            }
            //cinnamon
            if (firstAddOn === addOn[3]||secondAddOn === addOn[3]){
                recipe.instructions.splice(4, 0, addOn[3].addDirections)
            }
            //sprinkles
            if (firstAddOn === addOn[4]||secondAddOn === addOn[4]){
                recipe.instructions.splice(6, 0, addOn[4].addDirections)
                toppingImg1.src = './assets/sprinkles.jpg'
            }//frosting (always goes last)
            if (firstAddOn === addOn[5]||secondAddOn === addOn[5]){
                toppingImg2.src = './assets/frosting.jpg'
                recipe.instructions.push(addOn[5].addDirections)
            }//nutes
            if (firstAddOn === addOn[6]||secondAddOn === addOn[6]){
                recipe.instructions.splice(5, 0, addOn[6].addDirections)
                
            }
        }
        //this one is for oatmeal cookies
        if (recipe === oatmealCookieRecipe){
            if (firstAddOn === addOn[0] ||secondAddOn === addOn[0]){
                recipe.instructions.splice(3, 0, addOn[0].addDirections)
            }
            if (firstAddOn === addOn[1]||secondAddOn === addOn[1]){
                recipe.instructions.splice(3, 0, addOn[1].addDirections)
            }
            if (firstAddOn === addOn[2]||secondAddOn === addOn[2]){
                recipe.instructions.splice(2, 0, addOn[2].addDirections)  
            }
            if (firstAddOn === addOn[3]||secondAddOn === addOn[3]){
                recipe.instructions.splice(3, 0, addOn[3].addDirections)
            }
            if (firstAddOn === addOn[4]||secondAddOn === addOn[4]){
                recipe.instructions.splice(6, 0, addOn[4].addDirections)
                toppingImg1.src = './assets/sprinkles.jpg'
            }
            if (firstAddOn === addOn[5]||secondAddOn === addOn[5]){
                recipe.instructions.push(addOn[5].addDirections)
                toppingImg2.src = './assets/frosting.jpg'
            }
            if (firstAddOn === addOn[6]||secondAddOn === addOn[6]){
                recipe.instructions.splice(3, 0, addOn[6].addDirections)
                
            }
        }
        //this one is for sugar cookies
        if (recipe === sugarCookieRecipe){
            if (firstAddOn === addOn[0] ||secondAddOn === addOn[0]){
                recipe.instructions.splice(4, 0, addOn[0].addDirections)
            }
            if (firstAddOn === addOn[1]||secondAddOn === addOn[1]){
                recipe.instructions.splice(4, 0, addOn[1].addDirections)
            }
            if (firstAddOn === addOn[2]||secondAddOn === addOn[2]){
                recipe.instructions.splice(1, 0, addOn[2].addDirections)  
            }
            if (firstAddOn === addOn[3]||secondAddOn === addOn[3]){
                recipe.instructions.splice(4, 0, addOn[3].addDirections)
            }
            if (firstAddOn === addOn[4]||secondAddOn === addOn[4]){
                recipe.instructions.splice(6, 0, addOn[4].addDirections)
                toppingImg1.src = './assets/sprinkles.jpg'
            }
            if (firstAddOn === addOn[5]||secondAddOn === addOn[5]){
                recipe.instructions.push(addOn[5].addDirections)
                toppingImg2.src = './assets/frosting.jpg'
            }
            if (firstAddOn === addOn[6]||secondAddOn === addOn[6]){
                recipe.instructions.splice(4, 0, addOn[6].addDirections)
                
            }
        }
    }
    //this calls function
    createRecipe();
    //this renders the ingreidnts list and links it into our recipe section
    function renderIngredientsList (){
        var ulEl = document.createElement('ul')
        console.log('base recipe in render ingreidents' , cookieTypeSelected);
        recipeEl.appendChild(ulEl);
        for (var i = 0; i < cookieTypeSelected.ingredients.length; i++){
            var liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent=cookieTypeSelected.ingredients[i];
        } console.log('running')  
    }
        // this will render and append our instructions to our recipe section
     function renderInstructions (){
         var olEl = document.createElement('ol')
         recipeEl.appendChild(olEl);
         for (var i =0; i < cookieTypeSelected.instructions.length; i++){
             var liEl=document.createElement('li')
             olEl.appendChild(liEl);
             liEl.textContent=cookieTypeSelected.instructions[i];
         }

     }
   
renderIngredientsList();
renderInstructions();
console.log('This code is running')


recipeHistory.push(recipe);
var recipeJSON = JSON.stringify(recipeHistory);
localStorage.setItem('recipes', recipeJSON);

}


//This is for specifically printing the instructions from the recipe

function printDiv(printDiv) {

    var printContents = document.getElementById('recipe-box').innerHTML;
    var w=window.open();
    w.document.write(printContents);
    w.print();
    w.close();
}



