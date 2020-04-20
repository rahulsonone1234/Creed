// Initialize Firebase (ADD YOUR OWN DATA)
var firebaseConfig = {
    apiKey: "AIzaSyDSr_mmRJ2NEgVTFCmvmrxlZ78hulDgGks",
    authDomain: "creed-44709.firebaseapp.com",
    databaseURL: "https://creed-44709.firebaseio.com",
    projectId: "creed-44709",
    storageBucket: "creed-44709.appspot.com",
    messagingSenderId: "33393846251",
    appId: "1:33393846251:web:487e78922f104ad1"
  };
firebase.initializeApp(firebaseConfig);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
//!--document.getElementById('contactForm').addEventListener('submit', submitForm);
var el = document.getElementById('contactForm');
if(el){
  el.addEventListener('submit',submitForm , false);
  document.getElementById('contactForm').reset();
}

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var company = getInputVal('company');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, company, email, phone, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, company, email, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    company:company,
    email:email,
    phone:phone,
    message:message
  });
}