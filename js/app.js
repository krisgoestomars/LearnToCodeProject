/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

//The arrays with our main categories
var mySpecies = ["Dragonborn", "Dwarf", "Elf", "Gnome", "Half-Elf", "Halfling", "Half-Orc", "Human", "Tiefling"];
var myClass = ["Barbarian", "Bard", "Druid", "Monk", "Paladin", "Ranger", "Rogue", "Fighter", "Sorcerer", "Warlock", "Wizard"];
var myBackground = ["Acolyte", "Charlatan", "Criminal", "Entertainer", "Folk Hero", "Hermit", "Noble", "Outlander", "Sage", "Soldier", "Urchin"];
var myAlignment = ["Lawful Good", "Neutral Good", "Chaotic Good", "Lawful Neutral", "Neutral", "Chaotic Neutral", "Lawful Evil", "Neutral Evil", "Chaotic Evil"];

//Gets the button that rolls the dice
var mainButton = document.querySelector(".roll-button");

mainButton.addEventListener("click", function() {
  var firstRandom = mySpecies[Math.floor(Math.random() * mySpecies.length)];
  console.log(firstRandom);
  var secondRandom = myClass[Math.floor(Math.random() * myClass.length)];
  console.log(secondRandom);
  var thirdRandom = myBackground[Math.floor(Math.random() * myBackground.length)];
  console.log(thirdRandom);
  var fourthRandom = myAlignment[Math.floor(Math.random() * myAlignment.length)];
  console.log(fourthRandom); 
});
