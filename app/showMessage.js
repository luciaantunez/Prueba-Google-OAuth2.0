export function showMessage(message, type = "success") {
  Toastify({
    text: message,
    duration: 2000,
    destination: "https://github.com/apvarun/toastify-js",
    newWindow: true,
    close: true,
    gravity: "bottom", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background:
        type === "success"
          ? "linear-gradient(to right, #00b09b, #96c93d)"
          : "red"//"linear-gradient(to right, ##ff1f1f, #ff7af8)"
    },
    onClick: function () {}, // Callback after click
  }).showToast();
}
