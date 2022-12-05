import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
import { auth } from './firebase.js';
import { showMessage } from './showMessage.js';

const signupForm = document.querySelector('#signup-form');

signupForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = document.querySelector('#signup-email').value;
    const password = document.querySelector('#signup-password').value;

    try {
        const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
        console.log(userCredentials);

        //cerramos el modal de signup
        const signupModal = document.querySelector('#signupModal');
        const modal = bootstrap.Modal.getInstance(signupModal);
        modal.hide();

        //mostramos el cartel de bienvenido
        showMessage("Bienvenido " + userCredentials.user.email);

    //mostramos los errores
    } catch (error) {
        if (error.code === 'auth/email-already-in-use') {
            showMessage("Este email está en uso","error")
        } else if (error.code === 'auth/invalid-email') {
            showMessage("Email invalido","error")
        } else if (error.code === 'auth/weak-password') {
            showMessage("La contraseña es demasiado corta","error")
        } else if (error.code) {
            showMessage("Ups, algo salió mal","error")
        }
    }
});