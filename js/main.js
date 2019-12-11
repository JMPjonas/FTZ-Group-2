
/* Ida Start */ 

/*Ida Slut*/

/*Nicoline start*/
//array
let loginButton = document.getElementById("logindlogin");
console.log(loginButton);

loginButton.addEventListener("click", validation);


function validation (){
let nummerplade = document.getElementsByClassName('nummerplade')[0].value;   
let adgangskode = document.getElementsByClassName('adgangskode')[0].value;   
if(nummerplade=='') {
    
 document.getElementsByClassName('nummerplade')[0].placeholder = "Venligst indtast nummer";
    
    if (adgangskode == '') {
        document.getElementsByClassName('adgangskode')[0].placeholder = "Venligst indtast felterne";
    }
      
 }    
     else if (adgangskode == '') {
        document.getElementsByClassName('adgangskode')[0].placeholder = "Venligst indtast felterne";
    }
    
    else {
        location.href = "mycar.html";
    }
}

/*Nicoline slut*/

/* JONAS START*/

/* JONAS SLUT*/
