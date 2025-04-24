//selector variables
const oven = document.querySelector("#oven");
const cookie = document.querySelector("#cookie");
const factory = document.querySelector("#factory");
let displayCookies = document.querySelector("#total-cookies");
let displayOvens = document.querySelector("#total-ovens");
let displayFactories=document.querySelector("#total-factories");
let unlock = document.querySelector(".unlocked")

// 1. Declare three variables.
let totalCookies=0;
let ovens=0;
let factories=0;
// -  Set each one to a value of 0

cookie.addEventListener("click", function () {
// 2. Reassign the value of totalCookies to be itself plus 1. 
// - See if you can find a shorthand way to do this with a Google search.
  totalCookies=totalCookies+1;

// 3. Uncomment the line below. 
// - Check to see that the amount of cookies increases when you click the image and that the number displays correctly.
displayCookies.innerHTML = totalCookies;
});

oven.addEventListener("click", function () {
// 4. Create an if/else statement. 
  if(totalCookies >=30){
// - Anytime the totalCookies is greater than or equal to 30, these four things happen:
//      - Update the value of the `totalCookies` variable to be itself minus 30
  totalCookies =totalCookies-30;
//      - Update the `displayCookies` innerHTML to equal `totalCookies`
displayCookies.innerHTML = totalCookies;    
//      - Update the value of the `ovens` variable to itself plus 1
    ovens=ovens+1;
//      - Update the `displayOvens` innerHTML to equal `ovens`
    displayOvens.innerHTML=ovens;
  }
// - Else, an alert will pop up that says "You need 30 cookies to buy an oven!" (or something that gets that message across)
  else{
    alert(`You need 30 cookies to buy an oven!`)
  }
  

});

// 5. The factory is locked! Based on how the oven section works, see if you can get a factory into the game.
// - You will need to update the HTML to display the numbers of factories. 
//let factories=document.querySelector()

factory.addEventListener("click", function () {
    if(ovens >=5){ovens=ovens-5;

  displayOvens.innerHTML=ovens;
  factories=factories+1;
  displayFactories.innerHTML=factories;
  unlock.innerHTML=`cost 5 ovens`; 
  unlock.style.color="black";
   }
   else{
    alert(`You need 5 ovens to buy a Factory!`)
   }
   })
// - Don't forget to save it as a variable at the top with your other selectors! */



//UPDATES TOTALCOOKIES EVERY SECOND (1000 MILLISECONDS), ONCE AN OVEN IS ACCESSED
//UNCOMMENT TO USE
window.setInterval(function () {
  /* task 7: this line below needs updating if you add a factory. How could we change it?*/
  /*
     totalCookies = totalCookies + 12 * ovens;
     displayCookies.innerHTML = totalCookies;
  ovens= ovens +6*factories;
  displayOvens.innerHTML=ovens;
 factories = factories + 3;
  displayFactories.innerHTML=factories;
  unlock.innerHTML=`cost 5 ovens`;
    unlock.style.color="black";

   }, 1000);
*/
});