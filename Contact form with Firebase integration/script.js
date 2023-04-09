// Initialize Firebase (ADD YOUR OWN DATA)
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
    apiKey: "AIzaSyCEK3o7tYgNkBKzcywzB7Imado5oly6F-E",
    authDomain: "fir-project-9f003.firebaseapp.com",
    databaseURL: "https://fir-project-9f003-default-rtdb.firebaseio.com",
    projectId: "fir-project-9f003",
    storageBucket: "fir-project-9f003.appspot.com",
    messagingSenderId: "379720615810",
    appId: "1:379720615810:web:007233bdccf328db8a319b",
    measurementId: "G-4EVCVP36GZ"
  };
  
  
  firebase.initializeApp(firebaseConfig);
  
  // Reference messages collection
  var messagesRef = firebase.database().ref('messages');
  
  // Listen for form submit
  document.getElementById('contactForm').addEventListener('submit', submitForm);
  
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