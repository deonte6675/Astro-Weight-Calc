// Write your JavaScript code here!
// Write your JavaScript code here! 
var planets = [ 
    ['Pluto', 0.06], 
    ['Neptune', 1.148], 
    ['Uranus', 0.917], 
    ['Saturn', 1.139], 
    ['Jupiter', 2.640], 
    ['Mars', 0.3895], 
    ['Moon', 0.1655], 
    ['Earth', 1], 
    ['Venus', 0.9032], 
    ['Mercury', 0.377], 
    ['Sun', 27.9] 
];
 
    // We are going to solve this by breaking the problem into three parts. 
    // Programmers like automating things, we'll populate the HTML drop down options using code, 
    // instead of having to type out all the values. 
    // Create a function that does the some math and gives us the new weight. 
    // Then create a function that responds when the user clicks on the button. 

    // 1. Populate the dropdown element with the data found in the planets array. 
    // The value of each option should be the planet's name. 
    // Use the following built-in methods: 
    // `.forEach` `document.createElement` `document.getElementById` `.appendChild` 


function calculateWeight(weight, planetName) { 
    // 2. Write the code to return the correct weight 
//Given integer && planet name 
//Output Integer representing user's weight on the chosen planet
    if(planetName == planets[0][0]){
        return (weight *= 0.06);
    }else if (planetName == planets[1][0]){
        return weight *= 1.148;
    }else if(planetName == planets[2][0]){
        return weight *= 0.917;
    }else if(planetName == planets[3][0]){
        return weight *= 1.139;
    }else if(planetName == planets[4][0]){
        return weight *= 2.640;
    }else if(planetName == planets[5][0]){
        return weight *= 0.3895;
    }else if(planetName == planets[6][0]){
        return weight *= 0.1655;
    }else if(planetName == planets[7][0]){
        return weight;
    }else if(planetName == planets[8][0]){
        return weight *= 0.9032;
    }else if(planetName == planets[9][0]){
        return weight *= 0.377;
    }else if(planetName == planets[10][0]){
        return weight *= 27.9;
    }    
    
} 
function handleClickEvent(e) {

     // 3. Create a variable called userWeight and assign the value of the user's weight.
    let userWeight= document.getElementById("user-weight").value;
     // 4. Create a variable called planetName and assign the name of the selected planet from the drop down. 
    let planetName = document.getElementById("planets").value;
    // 5. Create a variable called result and assign the value of the new calculated weight. 
    let result = calculateWeight(userWeight, planetName);
    // 6. Write code to display the message shown in the screenshot. 
    let lastAnswer = document.getElementById("output").innerHTML = `If you were on ${planetName}, you would weigh ${result}lbs!`;
} 

    // 7. Set the #calculate-button element's onclick method to use the handleClickEvent function.
            /*Done*/
    // 8. Make it look nice by attaching  a style.css file to your index.html and writing some basic styling, 
    // feel free to add classes and id's to the HTML elements as you need, 
    // import.a google font and use it for some or all of the text on your page. 
                

    // Bonus Challenges 
    // 8. Reverse the drop down order so that the sun is first.

