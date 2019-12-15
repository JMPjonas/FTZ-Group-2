/*Nicoline start*/
let dyr = ["Hunde", "Katte", "Delfiner", "Fugle", "Løver", "Heste"];
let text = "";
let i;
for (i = 0; i < dyr.length; i++){
console.log(dyr[i]);
}

//array
let loginButton = document.getElementById("logindlogin");
console.log(loginButton);

try {
    loginButton.addEventListener("click", validation);
}
catch(err) {
}


function validation (){
let nummerplade = document.getElementsByClassName('nummerplade')[0].value;   
let adgangskode = document.getElementsByClassName('adgangskode')[0].value;   
if(nummerplade=='') {
    
 document.getElementsByClassName('nummerplade')[0].placeholder = "Venligst indtast nummerplade";
    
    if (adgangskode == '') {
        document.getElementsByClassName('adgangskode')[0].placeholder = "Venligst indtast adgangskode";
    }
      
 }    
     else if (adgangskode == '') {
        document.getElementsByClassName('adgangskode')[0].placeholder = "Venligst indtast felterne";
    }
       
    else {
        location.href = "mycar.html";
    };
};




/*Nicoline slut*/

/* JOACHIM START*/
let mad = ["Bøf", "Suppe", "Quinoasalat", "Lasagne", "Laks", "Pasta"];
let madlisten = "";
let p;
for (p = 0; p < mad.length; p++) {
  madlisten += mad[p] + "<br>";
} 

try {
document.getElementById("listen").innerHTML = madlisten;
}
catch(err) {
    console.log(err);
}

 

var image_tracker='udennummer';
function change(){
    let billede = document.getElementById ("nummerboks");
    
    if (image_tracker=='udennummer') {
        billede.src ='/img/nummerplade2.svg';
        image_tracker= 'mednummer';
    } 
else{
        billede.src = '/img/nummerplade.svg';
        image_tracker = 'udennummer';
    }   
}
/* JOACHIM SLUT*/

// Ida (START)
let toggleNavStatus = false; 

let toggleNav = function(){
 let getSidebar = document.querySelector(".toggle-sidebar");
 let getSidebarUl = document.querySelector(".toggle-sidebar ul");
 let getSidebarLinks = document.querySelectorAll(".toggle-sidebar a");


 
if (toggleNavStatus === false) {
    console.log("Open nav");
  getSidebarUl.style.visibility = "visible";
  getSidebar.style.width = "100%"; 
    
let arrayLength = getSidebarLinks.length; 
for (let i = 0; i < arrayLength; i++) {
    getSidebarLinks[i].style.opacity = "1"; 
  } 
 toggleNavStatus = true;
}

    
else if (toggleNavStatus === true) {
    console.log("Closed nav");
    getSidebar.style.width = "0%"; 
    
let arrayLength = getSidebarLinks.length; 
for (let i = 0; i < arrayLength; i++) {
    getSidebarLinks[i].style.opacity = "0";
  } 

 getSidebarUl.style.visibility = "hidden"; 
    
 toggleNavStatus = false;
         
}
    burgerCross();
}

let btnToggleNav = document.getElementsByClassName("btn-toggle-nav");

btnToggleNav[0].addEventListener("click", toggleNav);

function burgerCross() {
    
    btnToggleNav[0].classList.toggle("open");
  }; 


///Jonas (START)
//Dette stykke gør at jeg kan toggle visse elementer fra og til.
function toggle(){
let a1 = document.getElementById("a1")
let a2 = document.getElementById("a2")
let a3 = document.getElementById("a3")
let a4 = document.getElementById("a4")
let a5 = document.getElementById("a5")
let a6 = document.getElementById("a6")
let a7 = document.getElementById("a7")
let a8 = document.getElementById("a8")

let grid = [a1, a2, a3, a4, a5, a6, a7, a8];
let i;
for (i = 0; i < grid.length; i++) {
grid[i].classList.toggle("hideandturnon");
}
};
//Dette gør at knappen går fra aktiv til deaktiv.
 var image_tracker='dsaktiv';
function swap(){
    let image = document.getElementById ("indikator");
    if (image_tracker=='dsinaktiv') {
        image.src ='/img/icons/drivesafeaktiv.svg';
        image_tracker= 'dsaktiv';
    } else{
        image.src = '/img/icons/drivesafedeaktiv.svg';
        image_tracker = 'dsinaktiv'
    }
    
}
//Jonas (SLUT)