let W = window.innerWidth;
let H = window.innerHeight;
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const maxConfettis = 12;
const particles = [];

const possibleColors = [
    "DodgerBlue",
    "OliveDrab",
    "Gold",
    "Pink",
    "SlateBlue",
    "LightBlue",
    "Gold",
    "Violet",
    "PaleGreen",
    "SteelBlue",
    "SandyBrown",
    "Chocolate",
    "Crimson"
];

function randomFromTo(from, to) {
    return Math.floor(Math.random() * (to - from + 1) + from);
}

function confettiParticle() {
    this.x = Math.random() * W; // x
    this.y = Math.random() * H - H; // y
    this.r = randomFromTo(1, 33); // radius
    this.d = Math.random() * maxConfettis + 11;
    this.color =
        possibleColors[Math.floor(Math.random() * possibleColors.length)];
    this.tilt = Math.floor(Math.random() * 33) - 11;
    this.tiltAngleIncremental = Math.random() * 0.07 + 0.05;
    this.tiltAngle = 0;

    this.draw = function () {
        context.beginPath();
        context.lineWidth = this.r / 2;
        context.strokeStyle = this.color;
        context.moveTo(this.x + this.tilt + this.r / 3, this.y);
        context.lineTo(this.x + this.tilt, this.y + this.tilt + this.r / 5);
        return context.stroke();
    };
}

function Draw() {
    const results = [];

    // Magical recursive functional love
    requestAnimationFrame(Draw);

    context.clearRect(0, 0, W, window.innerHeight);

    for (var i = 0; i < maxConfettis; i++) {
        results.push(particles[i].draw());
    }

    let particle = {};
    let remainingFlakes = 0;
    for (var i = 0; i < maxConfettis; i++) {
        particle = particles[i];

        particle.tiltAngle += particle.tiltAngleIncremental;
        particle.y += (Math.cos(particle.d) + 3 + particle.r / 2) / 2;
        particle.tilt = Math.sin(particle.tiltAngle - i / 3) * 15;

        if (particle.y <= H) remainingFlakes++;

        // If a confetti has fluttered out of view,
        // bring it back to above the viewport and let if re-fall.
        if (particle.x > W + 30 || particle.x < -30 || particle.y > H) {
            particle.x = Math.random() * W;
            particle.y = -30;
            particle.tilt = Math.floor(Math.random() * 10) - 20;
        }
    }

    return results;
}

window.addEventListener(
    "resize",
    function () {
        W = window.innerWidth;
        H = window.innerHeight;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    },
    false
);

// Push new confetti objects to `particles[]`
for (var i = 0; i < maxConfettis; i++) {
    particles.push(new confettiParticle());
}

// Initialize
canvas.width = W;
canvas.height = H;
Draw();
// 
var allCookies = [];
function Cookie(id, name, ingredients, instructions) {
    this.id = id;
    this.name = name;
    this.ingredients = ingredients;
    this.instructions = instructions;
    allCookies.push(this);
}
new Cookie('chocolate_chip', 'Chocolate Chip Cookie', ['1 cup butter',
    '3/4 cups sugar',
    '3/4 cups brown sugar',
    '1 teaspoon vanilla',
    '2 large eggs',
    '2 1/4 cups flour',
    '1 tsp baking soda',
    '1 tsp salt',
    '2 cups chocolate chips',
], ['Preheat Oven to 375',
        'Cream butter and sugar together',
        'Beat in eggs and vanilla',
        'Beat in flour, salt and baking powder',
        'Mix in chocolate chips',
        'Drop balls into one inch balls into an ungreased cookie tray',
        'Bake 9 to 11 minutes, cool on a wire rack.'
    ]);
new Cookie('sugar_cookie', 'Sugar Cookie', ['1/2 cup Sugar',
    '1/2 cup Butter',
    '1 tsp Vanilla',
    '2 eggs',
    '2 1/2 cup Flour, sifted',
    '2 tsp double-acting baking powder',
    '1/2 tsp salt'
], ['Cream butter and sugar together.',
        'Beat in eggs and vanilla',
        'Add and mix in dry ingredients',
        'Chill for 3-4 hours',
        'Preheat Oven to 350 degrees',
        'Roll cookies to a 1/4 - 1/2 thickness. Use a cookie cutter to shape cookies.',
        'Place cookies on greased cookie sheet.',
        'Bake 7 to 12 minutes. Cool on wire rack.'
    ]);
new Cookie('oatmeal_cookie', 'Oatmeal Cookie', ['1/2 cup butter',
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
], [
        'Cream butter and sugar together',
        'Beat in eggs, milk and vanilla',
        'Add and mix in dry ingredients except oats',
        'When smooth, mix in oats',
        'Beat mixture well',
        'Drop cookies in 1 inch balls onto a greased cookie sheet',
        'Bake 10 to 12 minutes. Cool on wire wrack'
    ]);
var addOn = [];
//constructor for creating add ons. this constructor will be pushed into add on array. It includes a name, and id, the instructions(addDIrections) and the amount
function AddOn(name, id, addDirections, amount) {
    this.name = name;
    this.id = id;
    this.addDirections = addDirections;
    this.amount = amount;
    this.isSelected = false;
    this.left = 0;
    this.top = 0;
    //push objects into array
    addOn.push(this);
}
//this functions holds all the new add ons that go into the array
function makeAddOns() {
    var chocolate_chip = new AddOn('chocolate_chip', 'chocolate_chip', 'Mix in Chocolate Chips', '1 cup');
    var coconut = new AddOn('coconut', 'coconut', 'Mix in Coconut', '1 cup');
    var peanut_butter = new AddOn('peanut_butter', 'peanut_butter', 'Mix in Peanut Butter until smooth', '1 cup');
    var cinnamon = new AddOn('cinnamon', 'cinnamon', 'Mix in Cinnamon', '1 tsp');
    var sprinkles = new AddOn('sprinkles', 'sprinkles', 'Sprinkle the sprinkles over the uncooked cookies', '1/2 cup');
    var frosting = new AddOn('frosting', 'frosting', 'Once cool, add frosting', '1 can');
    var nuts = new AddOn('nuts', 'nuts', 'Mix in Nuts', '1 cup');
}
makeAddOns();
var pantryElement = document.getElementById('pantry');
var selectedAddOnsElement = document.getElementById('selected-add-ons');
function renderAddOns() {
    for (var i = 0; i < addOn.length; i++) {
        var liEl = document.createElement('li');
        liEl.textContent = addOn[i].name;
        liEl.setAttribute('draggable', true);
        liEl.setAttribute('id', addOn[i].name);
        liEl.addEventListener('dragstart', dragStartHandler);
        pantryElement.appendChild(liEl);
        let elementSelected = document.getElementById(addOn[i].name);
        elementSelected.style.position = 'absolute';
        elementSelected.style.zIndex = 1000;
        elementSelected.style.left = addOn[i].left;
        elementSelected.style.top = addOn[i].top + (i * 50) + 'px';
    }
}
function dragStartHandler(event) {
    event.dataTransfer.setData('text/plain', event.target.id);
    event.dropEffect = 'move';
}
function dragOverHandler(event) {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
}
function dropHandler(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData('text/plain');
    console.log('data', data)
    event.target.appendChild(document.getElementById(data));
    let elementSelected = document.getElementById(data);
    elementSelected.style.position = 'absolute';
    elementSelected.style.zIndex = 1000;
    elementSelected.style.left = event.pageX - elementSelected.offsetWidth / 2 + 'px';
    elementSelected.style.top = event.pageY - elementSelected.offsetHeight / 2 + 'px';
    for (let i = 0; i < addOn.length; i++) {
        if (data === addOn[i].name) {
            addOn[i].left = elementSelected.style.left;
            addOn[i].top = elementSelected.style.top;
            if (event.target.id === 'selected-add-ons') {
                addOn[i].isSelected = true;
            }
            if (event.target.id === 'pantry') {
                addOn[i].isSelected = false;
            }
        }
    }
}
selectedAddOnsElement.addEventListener('dragover', dragOverHandler);
selectedAddOnsElement.addEventListener('drop', dropHandler);
pantryElement.addEventListener('dragover', dragOverHandler);
pantryElement.addEventListener('drop', dropHandler);
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
//define my variables for the event listener
var cookieTypeSelected;
var firstAddOn;
var secondAddOn;
//grab my submit and form elements from the html
var submitEl = document.getElementById('get-cookie');
var formEl = document.getElementById('form-one')
//create an advent listener for the entire form, using the submit button
formEl.addEventListener('submit', function (event) {
    event.preventDefault();
    console.log(event.target.base_cookie_choice);
    //function that grabs our baseCookieChoice and assigns it to the cookieTypeSelected for later(when we render)
    function baseCookieChoice() {
        if (event.target.base_cookie_choice.value === 'chocolate_chip') {
            console.log('chocolate_chip');
            cookieTypeSelected = chocolateChipRecipe;
            console.log(cookieTypeSelected);
        }
        if (event.target.base_cookie_choice.value === 'sugar_cookie') {
            console.log('sugar_cookie');
            cookieTypeSelected = sugarCookieRecipe;
            console.log(cookieTypeSelected);
        }
        if (event.target.base_cookie_choice.value === 'oatmeal_cookie') {
            console.log('oatmeal_cookie');
            cookieTypeSelected = oatmealCookieRecipe;
            console.log(cookieTypeSelected);
        }
    }
    //function that grabs the add ons.
    //this is a hot mess, but it works
    function addOnCookieChoice() {
        console.log(event.target.add_onsone.value)
        console.log(event.target.add_onstwo.value)
        //we specified extraCounter a long time ago when we rendered our add on lists
        for (var i = 0; i < extraCounter; i++) {
            var itemNameOne = addOn[i].name + 'one' //sets up itemNameOne so it will match with the selected item
            console.log('itemNameOne', itemNameOne);
            if (event.target.add_onsone.value === itemNameOne) {
                console.log('yay');
                firstAddOn = addOn[i];
                console.log(firstAddOn)
            }
        }
        //same thing but for the second add on list
        for (var j = 0; j < extraCounter; j++) {
            var itemNameTwo = addOn[j].name + 'two'
            console.log('itemNameTwo', itemNameTwo);
            if (event.target.add_onstwo.value === itemNameTwo) {
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
    //this section makes sure that the recipe re-renders on each submit
    recipeElCheck = document.getElementById('recipe');
    if (recipeElCheck) {
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
    function createRecipe() {
        //this part adds the amount and name of each add on to the ingredient list
        recipe.ingredients.push(firstAddOn.amount + ' ' + firstAddOn.name);
        recipe.ingredients.push(secondAddOn.amount + ' ' + secondAddOn.name);
        //this splices the addDirections property from the add ons into the instructions array
        //this one is for chocolate chip cookies
        if (recipe === chocolateChipRecipe) {
            //chocolate chips
            if (firstAddOn === addOn[0] || secondAddOn === addOn[0]) {
                recipe.instructions.splice(5, 0, addOn[0].addDirections)
            }
            //coconut
            if (firstAddOn === addOn[1] || secondAddOn === addOn[1]) {
                recipe.instructions.splice(5, 0, addOn[1].addDirections)
            }
            //peanut butter
            if (firstAddOn === addOn[2] || secondAddOn === addOn[2]) {
                recipe.instructions.splice(3, 0, addOn[2].addDirections)
            }
            //cinnamon
            if (firstAddOn === addOn[3] || secondAddOn === addOn[3]) {
                recipe.instructions.splice(4, 0, addOn[3].addDirections)
            }
            //sprinkles
            if (firstAddOn === addOn[4] || secondAddOn === addOn[4]) {
                recipe.instructions.splice(6, 0, addOn[4].addDirections)
            }//frosting (always goes last)
            if (firstAddOn === addOn[5] || secondAddOn === addOn[5]) {
                recipe.instructions.push(addOn[5].addDirections)
            }//nutes
            if (firstAddOn === addOn[6] || secondAddOn === addOn[6]) {
                recipe.instructions.splice(5, 0, addOn[6].addDirections)

            }
        }
        //this one is for oatmeal cookies
        if (recipe === oatmealCookieRecipe) {
            if (firstAddOn === addOn[0] || secondAddOn === addOn[0]) {
                recipe.instructions.splice(3, 0, addOn[0].addDirections)
            }
            if (firstAddOn === addOn[1] || secondAddOn === addOn[1]) {
                recipe.instructions.splice(3, 0, addOn[1].addDirections)
            }
            if (firstAddOn === addOn[2] || secondAddOn === addOn[2]) {
                recipe.instructions.splice(2, 0, addOn[2].addDirections)
            }
            if (firstAddOn === addOn[3] || secondAddOn === addOn[3]) {
                recipe.instructions.splice(3, 0, addOn[3].addDirections)
            }
            if (firstAddOn === addOn[4] || secondAddOn === addOn[4]) {
                recipe.instructions.splice(6, 0, addOn[4].addDirections)
            }
            if (firstAddOn === addOn[5] || secondAddOn === addOn[5]) {
                recipe.instructions.push(addOn[5].addDirections)
            }
            if (firstAddOn === addOn[6] || secondAddOn === addOn[6]) {
                recipe.instructions.splice(3, 0, addOn[6].addDirections)

            }
        }
        //this one is for sugar cookies
        if (recipe === sugarCookieRecipe) {
            if (firstAddOn === addOn[0] || secondAddOn === addOn[0]) {
                recipe.instructions.splice(4, 0, addOn[0].addDirections)
            }
            if (firstAddOn === addOn[1] || secondAddOn === addOn[1]) {
                recipe.instructions.splice(4, 0, addOn[1].addDirections)
            }
            if (firstAddOn === addOn[2] || secondAddOn === addOn[2]) {
                recipe.instructions.splice(1, 0, addOn[2].addDirections)
            }
            if (firstAddOn === addOn[3] || secondAddOn === addOn[3]) {
                recipe.instructions.splice(4, 0, addOn[3].addDirections)
            }
            if (firstAddOn === addOn[4] || secondAddOn === addOn[4]) {
                recipe.instructions.splice(6, 0, addOn[4].addDirections)
            }
            if (firstAddOn === addOn[5] || secondAddOn === addOn[5]) {
                recipe.instructions.push(addOn[5].addDirections)
            }
            if (firstAddOn === addOn[6] || secondAddOn === addOn[6]) {
                recipe.instructions.splice(4, 0, addOn[6].addDirections)

            }
        }
    }
    //this calls function
    createRecipe();
    //this renders the ingreidnts list and links it into our recipe section
    function renderIngredientsList() {
        var ulEl = document.createElement('ul')
        console.log('base recipe in render ingreidents', cookieTypeSelected);
        recipeEl.appendChild(ulEl);
        for (var i = 0; i < cookieTypeSelected.ingredients.length; i++) {
            var liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent = cookieTypeSelected.ingredients[i];
        } console.log('running')
    }
    // this will render and append our instructions to our recipe section
    function renderInstructions() {
        var olEl = document.createElement('ol')
        recipeEl.appendChild(olEl);
        for (var i = 0; i < cookieTypeSelected.instructions.length; i++) {
            var liEl = document.createElement('li')
            olEl.appendChild(liEl);
            liEl.textContent = cookieTypeSelected.instructions[i];
        }
    }

    renderIngredientsList();
    renderInstructions();
    console.log('This code is running')
}
//this is a printing button I broke
//This is for specifically printing the instructions from the recipe
function printDiv(printDiv) {
    var printContents = document.getElementById("print-recipe").innerHTML;
    w = window.open();
    w.document.write(printContents);
    w.print();
    w.close();
}