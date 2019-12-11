function validateForm() {
  var x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}
/* Ida Start */ 

/*Ida Slut*/

/*Nicoline start*/
const nummerplade = document.getElementById('nummerplade')
const password = document.getElementById('adgangskode')




/*Nicoline slut*/

/* JONAS START*/

/* JONAS SLUT*/

 let image_tracker='udennummer';
function change(){
    let billede = document.getElementById ("nummerplade");
    if (image_tracker=='udennummer') {
        billede.src ='/img/nummerplade2.svg';
        image_tracker= 'mednummer';
    } else{
        billede.src = '/img/nummerplade.svg';
        image_tracker = 'udennummer'
    }
    
}
        

/* JOACHIM START*/



/* JOACHIM SLUT*/