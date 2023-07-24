const firebaseConfig = {
    apiKey: "AIzaSyC0sE0E-Wd1H1O4wIRBTMPEwydc-Lina98",
    authDomain: "registroweb-2bfe5.firebaseapp.com",
    projectId: "registroweb-2bfe5",
    storageBucket: "registroweb-2bfe5.appspot.com",
    messagingSenderId: "1091645351886",
    appId: "1:1091645351886:web:5d26efb30b05a3703ced9f",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = firebase.auth();
const db = firebase.firestore();

//Elementos de HTML
let contenidoDeWeb = document.getElementById('contenidoDeWeb');
let formulario = document.getElementById('formulario');
let email = document.getElementById('txtEmail');
let password = document.getElementById('txtPassword');
let btnPublicar2 = document.getElementById('btnPublicar2');

let btnCerrar = document.getElementById('btnCerrar');

//Función cerrar sesión
btnCerrar.addEventListener('click', () => {
    firebase.auth().signOut().then(() => {
        console.log("Cierra sesión correctamente.");
        contenidoDeLaWeb.classList.replace('mostrar', 'ocultar');
        formulario.classList.replace('ocultar', 'mostrar');
    }).catch((error) => {
        console.log("Error con el cierre sesión correctamente.");
    })

});

//llamando datos de JSON de Bebidas calientes
document.getElementById('btnMas').addEventListener('click',cargarJSON2);
function cargarJSON2() {
    fetch('Bcaliente.json')
        .then(function (res) {
            return res.json();
            console.log("Ingreso");
        })
        .then((data) => {
            console.log(data);
            let html = '';
            data.forEach((yam) => {
                html += `
            <h1> ${yam.clase}</h1>
            <table>
            <td class="container">
            <img src="${yam.imagen}" width="600px">
            </td><td>
            <p >${yam.pequeño} </p>
            <p> ${yam.mediano} </p>
            <p> ${yam.grande} </p>
            </td>
            </table>
            `;
            })
            aparicion.classList.replace('ocultar', 'mostrar');
            document.getElementById('aparicion').innerHTML = html;
        })
}
//meno de bebidas calientes
btnMenos.addEventListener('click', () =>{
    aparicion.classList.replace('mostrar', 'ocultar');
})


//llamando datos de JSON de Bebidas frias
document.getElementById('btnMas2').addEventListener('click',cargarJSON3);
function cargarJSON3() {
    fetch('Bfrio.json')
        .then(function (res) {
            return res.json();
            console.log("Ingreso");
        })
        .then((data) => {
            console.log(data);
            let html = '';
            data.forEach((yei) => {
                html += `
            <h1> ${yei.clase}</h1>
            <table>
            <td class="container">
            <img src="${yei.imagen}" width="600px">
            </td><td>
            <p >${yei.pequeño} </p>
            <p> ${yei.mediano} </p>
            <p> ${yei.grande} </p>
            </td>
            </table>
            `;
            })
            aparicion2.classList.replace('ocultar', 'mostrar');
            document.getElementById('aparicion2').innerHTML = html;
        })
}
//menos de bebidas frias
btnMenos2.addEventListener('click', () =>{
    aparicion2.classList.replace('mostrar', 'ocultar');
})


//Función De Agregar datos
btnPublicar2.addEventListener('click', () => {
    db.collection("comentarios").add({
        titulo: txtTitle = document.getElementById('txtTitle2').value,
        descripcion: txtDescription = document.getElementById('txtDescription2').value,
    })
        .then((docRef) => {
            console.log("Se guardo correctamente tu comentario: ", docRef.id);
            ImprimirComentariosEnPantalla2();
        })
        .catch((error) => {
            console.error("Error al guardar al enviar tu comentario: ", error);
        });
})

//Función De Leer Datos de Firebase
function ImprimirComentariosEnPantalla2() {
    db.collection("comentarios").get().then((querySnapshot) => {
        let html = '';
        querySnapshot.forEach((doc) => {
            console.log(`${doc.data().titulo}`);
            console.log(`${doc.data().descripcion}`);
            var listarDatos = `
            <div>
            <li class="listarDatos">
                <h5 class="listarDatosH5"> ${doc.data().titulo} </h5>
                <br>
                <p class="letra"> ${doc.data().descripcion} </p>
            <li>
            </div>

            `;
            html += listarDatos;
        }); document.getElementById('ImprimirComentariosEnPantalla2').innerHTML = html;
    });
}
