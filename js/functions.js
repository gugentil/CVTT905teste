function submitForm(){
    const form = document.forms['contactForm']
    
    var name     = form["name"].value
    var company  = form["company"].value
    var email    = form["email"].value
    var phone    = form["phone"].value
    var message  = form["message"].value

    console.log(name)

    saveMessage(name, company, email, phone, message)
    afterSend()

    return false;
}

function saveMessage(name, company, email, phone, message){
    // DatabaseReference
    var newDatabaseReference = databaseReference.push();

    newDatabaseReference.set(
    {
        name: name,
        company: company,
        email: email,
        phone: phone,
        message: message
    }
    )
}



  var firebaseConfig = {
    apiKey: "AIzaSyBqSlcTPxeBAZABKaVVzCXTOoiS92YJMQA",
    authDomain: "progweb-2df8b.firebaseapp.com",
    databaseURL: "https://progweb-2df8b.firebaseio.com",
    projectId: "progweb-2df8b",
    storageBucket: "progweb-2df8b.appspot.com",
    messagingSenderId: "798098222842",
    appId: "1:798098222842:web:aa7ea12f0c61910ea02343",
    measurementId: "G-JBGW9ND60Y"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function afterSend(){
    confirm = document.getElementById("confirm")
    confirm.className = "open"
    setTimeout(
        function(){
        confirm.className = "closed";
    },3000);
    document.getElementById('submitForm').reset();
}

// 

var databaseReference = firebase.database().ref("progweb-2df8b")




function message(msg) {
    document.getElementById('output').innerHTML = "event: " + msg;
}

function closeMe(){
    var x = document.getElementById('demo');

    // Option 1
    // x.style.display="none";
    x.className="closed";
}

function openMe(){
    var x = document.getElementById('demo');
    // x.style.display="block";
    x.className="open";
}

function displayThis(element){
    console.log(element);    
    document.getElementById('mensagem').innerHTML = element.innerHTML;
}

function displayPicture(element){
    var frame = document.getElementById('frame');
    frame.innerHTML = element.alt;
    frame.style.backgroundImage="url('"+element.src+"')";
}

function undisplayPicture(){
    var frame = document.getElementById('frame');
    frame.innerHTML = "Passe o mouse sobre as figuras";
    frame.style.backgroundImage="none";
}

const Fotos = [
    "Eu",
    "Foto Formal",
    "Eu e meu Cachorro",
    "Eu e minha namorada"
    ]

const images = [
    src="imgs/Foto.jpg",
    src="imgs/Foto1.jpEg",
    src="imgs/Foto2.jpEg",
    src="imgs/Foto3.jpEg"
]

var current = 0;

// Resto da divisão conforme a implementação do python.
function mod(n, m) {
    return ((n % m) + m) % m;
}

function movePrevious(){
    var frame = document.getElementById('frame2');
    current = mod(current - 1, Fotos.length);
    frame2.style.backgroundImage="url('"+images[current]+"')";
    frame2.innerHTML = Fotos[current];
}

function moveNext(){
    var frame = document.getElementById('frame2');
    current = mod(current + 1, Fotos.length);
    frame2.style.backgroundImage="url('"+images[current]+"')";
    frame2.innerHTML = Fotos[current];
}

var alreadyShown = false

function mostrarTodos() {
    if (!alreadyShown){
	const divProf = document.querySelector('#todas_as_fotos')
	for (var i = 0; i < images.length; i++){
	    // Criando uma nova tag <img>
	    element = document.createElement("img")
	    element.src = images[i]
	    divProf.appendChild(element)
	}
	alreadyShown = true
    } else {
	// Código para o else
    }
}
