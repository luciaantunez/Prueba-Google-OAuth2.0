btnSaveChanges = document.getElementById("btn-send-changes");
email = document.getElementById("email");
firstName = document.getElementById("firstName");
lastname = document.getElementById("firstLastname");
phoneNumber = document.getElementById("phoneNumber");
secondLastname = document.getElementById("secondLastname");
secondName = document.getElementById("secondName");
imgPreview = document.getElementById("imgPreview");

//Función que maneja los carteles de error si los imputs obligatorios están vacíos
function requiredFields() {
  !email.value
    ? email.classList.add("is-invalid")
    : email.classList.remove("is-invalid");
  !firstName.value
    ? firstName.classList.add("is-invalid")
    : firstName.classList.remove("is-invalid");
  !lastname.value
    ? lastname.classList.add("is-invalid")
    : lastname.classList.remove("is-invalid");
}

//Evento que verifica los valores, crea un objeto Usuario y lo guarda en local storage
btnSaveChanges.addEventListener("click", (e) => {
  requiredFields();
  if (email.value && firstName.value && lastname.value) {
    userInfo = {
      email: email.value,
      firstName: firstName.value,
      lastname: lastname.value,
    };
    if (secondName.value) {
      userInfo.secondName = secondName.value;
    }
    if (secondLastname.value) {
      userInfo.secondLastname = secondLastname.value;
    }
    if (phoneNumber.value) {
      userInfo.phoneNumber = phoneNumber.value;
    }
    if (imgPreview.src) {
        userInfo.img = imgPreview.src;
    }
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
  }
});

//evento que verifica que el usuario ingresado sea el mismo que el usuario del local storage 
//y si lo es rellena los campos (inputs) con los datos del usuario
// el usuario siempre lo coloca en el mail independientemente del if
document.addEventListener("DOMContentLoaded", (event) => {
  user = localStorage.getItem("user");
  userInfo = JSON.parse(localStorage.getItem("userInfo"));
  if (userInfo && userInfo.email == user) { 
    firstName.value = userInfo.firstName;
    lastname.value = userInfo.lastname;
    email.value = userInfo.email;
    if (userInfo.secondName) {email
      secondName.value = userInfo.secondName;
    }
    if (userInfo.secondLastname) {
      secondLastname.value = userInfo.secondLastname;
    }
    if (userInfo.phoneNumber) {
      phoneNumber.value = userInfo.phoneNumber;
    }
    if (userInfo.img) {
        imgPreview.src = userInfo.img;
    }
  } else {
    email.value = user;
  }
});

//AGREGAR IMAGEN DE PERFIL
//https://www.youtube.com/watch?v=8K2ihr3NC40&ab_channel=midudev
document.querySelector("#profilePhoto").addEventListener("change", function(){
    userInfo = JSON.parse(localStorage.getItem("userInfo"));
    const reader = new FileReader();
    reader.addEventListener("load", () => {
        if (reader.result) {
            userInfo.img = reader.result;
          }
        imgPreview.src = userInfo.img;
        localStorage.setItem("userInfo", JSON.stringify(userInfo));
    });
    reader.readAsDataURL(this.files[0]);
});
