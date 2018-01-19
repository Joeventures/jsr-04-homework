var genders = ["male", "female"];
var names = ["Doctor Gonzo","Doonesbury","Periwinkle","Chipper","Elmer","Dolce","Babushka","Grover","Taxi","Rosebud","Ouija","Bossman","Truffles","Six Toes","Sadie","Seuss","Van Gogh","Bunk","Heidi"];
var dogs = [];

function rand_item(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function adoptHandler(breed) {
  // let's add our code here to handle adopting a dog
  // don't forget to stop the form from reloading the page
  gender = rand_item(genders);
  name = rand_item(names);
  if(name != "undefined") {
    names.splice(names.indexOf(name), 1);
    selectedDog = "a " + gender + " " + breed + " named " + name;
    dogs.push(selectedDog);
    console.log("You selected " + selectedDog);
  } else {
    console.log("We're out of dogs!");
  }
}

document.getElementById('formSubmit').onclick = function() {
  document.getElementById('addmore').classList.remove('hidden');
  document.getElementById('done').classList.remove('hidden');
  document.getElementById('formSubmit').classList.add('hidden');
  selectedBreed = document.getElementById('rescue').value;
  adoptHandler(selectedBreed);
  return false;
}

document.getElementById('addmore').onclick = function() { 
  selectedBreed = document.getElementById('rescue').value;
  if(names.length == 0) {
    document.getElementById('addmore').classList.add('hidden');
  }
  adoptHandler(selectedBreed);
  return false;
}

function finishHandler() {
  // let's console log all our dogs
  manyDogs = dogs.length > 1;
  manyDogsMessage = manyDogs ? "a lot of happy doggies! They are:" : "one lucky pup! It is:";
  console.log("You adopted " + manyDogsMessage);
  for (i = 0; i < dogs.length; i++) {
    console.log(dogs[i]);
  }
}

document.getElementById('done').onclick = function() {
  document.getElementById('addmore').classList.add('hidden');
  document.getElementById('done').classList.add('hidden');
  finishHandler();
}
