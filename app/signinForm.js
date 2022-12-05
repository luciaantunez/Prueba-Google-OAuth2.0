import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
import { auth } from './firebase.js';

import { showMessage } from './showMessage.js';

const signInForm = document.querySelector('#login-form');

signInForm.addEventListener('submit', async e => {
    e.preventDefault
    const email = document.querySelector('#login-email').value;
    const password = document.querySelector('#login-password').value;

    try {
        const credentials = await signInWithEmailAndPassword(auth, email, password);
        console.log(credentials);

        const modal = bootstrap.Modal.getInstance(document.querySelector('#signinModal'));
        modal.hide();

        let user = credentials.user.email;
        showMessage("Bienvenido " + user);
        localStorage.setItem("user", user);

        //redireccionamos a google?
        //location.replace("https://www.google.com");
        location.replace("main.html");
    } catch (error) {
        if (error.code === "auth/wrong-password") {
            showMessage("Contraseña incorrecta", "error");
        } else if (error.code === "auth/user-not-found") {
            showMessage("El usuario no fue encontrado", "error");
        }
    }
});

