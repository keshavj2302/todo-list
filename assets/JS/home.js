// This script tag is used just to change the themes
// Theme button and main element is being fetched
var theme = document.getElementById('theme');
var main = document.getElementById('main');

// This function is used to update the theme
var updateTheme = function(){

    // if current mode is the dark mode
    if(main.style.color == "white"){
        console.log("black!!");
        main.style.color = "black";
        main.style.backgroundImage = "linear-gradient(to bottom right, white, white)";
        theme.innerHTML = "Dark mode"
    }else{

        // if the current mode is the light mode
        console.log("white!!");
        main.style.color = "white";
        main.style.backgroundImage = "linear-gradient(to bottom right, #070774, midnightblue)";
        theme.innerHTML = "Light mode"
    }
}

// button used for updating the theme
theme.addEventListener('click', updateTheme);