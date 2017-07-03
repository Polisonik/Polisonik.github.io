  var link = document.querySelector(".login");
  var popup = document.querySelector(".modal-content");
  var close = document.querySelector(".modal-content-close");
  var login = popup.querySelector("[name=login]");
  var password = popup.querySelector("[name=password]");
  var form = popup.querySelector(".login-form");
  var storage = localStorage.getItem("login");
  var popupMap = document.querySelector("modal-content-map");
  var openMap = document.querySelector(".footer-contacts a");
  var map = document.querySelector(".modal-content-map");
  var closeMap = map.querySelector(".modal-content-close");
  var overlay = document.querySelector(".modal-overlay");
  var location = document.querySelector(".open-map");

  link.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.add("modal-content-show");
    login.focus();
    if (storage) {
      login.value = storage;
      password.focus();
    } else {
      login.focus();
    }
  });

  close.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.remove("modal-content-show");
  });

  form.addEventListener("submit", function(event) {
    if (!login.value || !password.value) {
      event.preventDefault();
      console.log("Нужно ввести логи и пароль");
    } else {
      localStorage.setItem("login", login.value)
    }
  });

  window.addEventListener("keydown", function() {
    if (event.keyCode === 27){
      if (popup.classList.contains("modal-content-show")) {
        popup.classList.remove("modal-content-show");
      }
    }
  });

  openMap.addEventListener("click",function(event){
    event.preventDefault();
    map.classList.add("modal-content-map-show");
    overlay.classList.add("modal-overlay-show");
  });

  closeMap.addEventListener("click", function(event){
    event.preventDefault();
    map.classList.remove("modal-content-map-show");
    overlay.classList.remove("modal-overlay-show");
  }); 
  
  location.addEventListener("click", function(event){
    event.preventDefault();
    map.classList.add("modal-content-map-show");
    overlay.classList.add("modal-overlay-show");
  });

  