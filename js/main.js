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

 var image_tracker='f';
function change(){
    var image = document.getElementById ("nummerplade");
    if (image_tracker=='f') {
        image.src ='/img/nummerplade2.svg';
        image_tracker= 't';
    } else{
        image.src = '/img/nummerplade.svg';
        image_tracker = 'f'
    }
    
}
        

/* JOACHIM START*/



/* JOACHIM SLUT*/