import { GoogleAuthProvider, signInWithPopup} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
const googleButton = document.querySelector('#googleLogin');

import { auth } from './firebase.js';

import { showMessage } from './showMessage.js';

//es asíncrono porque es una consulta a los servidores de google
googleButton.addEventListener('click', async () => { 
    //creamos una instancia de google auth provider
    const provider = new GoogleAuthProvider(); 
    
    try {
        //si esto funciona devuelve las credenciales del usuario
        const credentials = await signInWithPopup(auth, provider);
        console.log(credentials);

        //cerramos el modal del login
        const modal = bootstrap.Modal.getInstance(document.querySelector('#signinModal'));
        modal.hide();

        let user = credentials.user.displayName;
        showMessage("Bienvenido " + user);
        localStorage.setItem("user", user);

        //redireccionamos a google?
        //location.replace("https://www.google.com");
        location.replace("main.html");
        
    } catch (error) {
        console.log(error);
    }
});