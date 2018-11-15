var getSaved ;
function getSavedCookies(){
    getSaved = JSON.parse(localStorage.getItem('recipes'));
    console.log(getSaved);
}
function printIngredients(){
    getSavedCookies();
    var mainEl = document.getElementById('printSaved'); 
    
    console.log('get saved', getSaved);
    for(var j=0; j < getSaved.length; j++){ 
    var olEl = document.createElement('ol');   
    var ulEl = document.createElement('ul');
       console.log('get saved at j', getSaved[j]);
       var ingredients = getSaved[j].ingredients;
        for(var i=0; i < getSaved[j].ingredients.length; i++){
            var liEl = document.createElement('li');
            liEl.textContent = getSaved[j].ingredients[i];
            ulEl.appendChild(liEl);
        }
        mainEl.appendChild(ulEl);
        for(var i = 0; i < getSaved[j].instructions.length; i++){
            var liEl = document.createElement('li');
            liEl.textContent = getSaved[j].instructions[i];
            olEl.appendChild(liEl);
        }
        mainEl.appendChild(olEl);
    } 
}
printIngredients();