
function submitForm(){
    const form = document.forms['contactForm']
    
    var name     = form["name"].value
    var company  = form["company"].value
    var email    = form["email"].value
    var phone    = form["phone"].value
    var message  = form["message"].value

    console.log(name)

    saveMessage(name, company, email, phone, message)

    afterSend();
    
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

function afterSend(){
    confirm = document.getElementById("confirm");
    confirm.className = "open";
    // Esperar 3 segundos
    setTimeout(
	() => {
	    confirm.className = "closed";
	}, 3000);
}

var databaseReference = firebase.database().ref("TT905")


/*
  Say Hello
*/

function sayHelloToFirebase() {
    const form = document.forms['sayHello']
    
    var name     = form["name"].value

    // Criando uma referência para a função que está no servidor.
    const sayHello = firebase.functions().httpsCallable("sayHello");
    sayHello(
	{
	    name : name 
	}
    ).then(
	(result) => {
	    alert(result.data);
	}
    );
    
    return false;
}


//////////////////////////////////////////////////
//////////////////////////////////////////////////
function submitAuthentication(e){
    e.preventDefault();
    const form = document.forms["login_form"];

    const email = form.email.value;
    const pass  = form.senha.value;

    firebase.auth().signInWithEmailAndPassword(email, pass);    
}




function submitRegistro(e){
    e.preventDefault();

    const form = document.forms["login_form"];

    const email = form.email.value;
    const pass  = form.senha.value;

    firebase.auth().createUserWithEmailAndPassword(email, pass);
}





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
