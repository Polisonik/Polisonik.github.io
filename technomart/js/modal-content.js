var open_feedback = document.querySelector(".btn-feedback");
var popup = document.querySelector(".modal-content-feedback");
var close_feedback = popup.querySelector(".btn-close");
var user_name = popup.querySelector("[name=name]");
var overlay = document.querySelector(".modal-overlay");

var map = document.querySelector(".modal-content-map");
var open_map = document.querySelector(".map-open");
var close_map = map.querySelector(".btn-close");


open_feedback.addEventListener("click", function (event) {
  event.preventDefault();
  popup.classList.add("modal-content-feedback-show");
  overlay.classList.add("modal-overlay-show");
  user_name.focus();
});

close_feedback.addEventListener("click", function (event) {
  event.preventDefault();
  popup.classList.remove("modal-content-feedback-show");
  overlay.classList.remove("modal-overlay-show");
});

window.addEventListener ("keydown", function (event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("modal-content-feedback-show")){
      popup.classList.remove("modal-content-feedback-show");
      overlay.classList.remove("modal-overlay-show");
    }
  }
});

overlay.addEventListener("click", function (event){
  event.preventDefault();
  if (popup.classList.contains("modal-content-feedback-show")) {
    popup.classList.remove("modal-content-feedback-show");
    overlay.classList.remove("modal-overlay-show");    
  }      
});

open_map.addEventListener("click", function (event) {
  event.preventDefault();
  map.classList.add("modal-content-map-show");
  overlay.classList.add("modal-overlay-show");
});
close_map.addEventListener("click", function (event) {
  event.preventDefault();
  map.classList.remove("modal-content-map-show");
  overlay.classList.remove("modal-overlay-show");
});

window.addEventListener("keydown", function (event) {
  if (event.keyCode === 27) {
    if (map.classList.contains("modal-content-map-show")){
      map.classList.remove("modal-content-map-show");
      overlay.classList.remove("modal-overlay-show");
    }
  }
})
overlay.addEventListener("click", function (event) {
  event.preventDefault();
  if (map.classList.contains("modal-content-map-show")){
      map.classList.remove("modal-content-map-show");
      overlay.classList.remove("modal-overlay-show");
    }
})

open_shopping_popup.addEventListener("click", function (event) {
  event.preventDefault();
  popup.classList.add("modal-content-feedback-show");
  overlay.classList.add("modal-overlay-show");
  user_name.focus();
});

close_feedback.addEventListener("click", function (event) {
  event.preventDefault();
  popup.classList.remove("modal-content-feedback-show");
  overlay.classList.remove("modal-overlay-show");
});

window.addEventListener ("keydown", function (event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("modal-content-feedback-show")){
      popup.classList.remove("modal-content-feedback-show");
      overlay.classList.remove("modal-overlay-show");
    }
  }
});

overlay.addEventListener("click", function (event){
  event.preventDefault();
  if (popup.classList.contains("modal-content-feedback-show")) {
    popup.classList.remove("modal-content-feedback-show");
    overlay.classList.remove("modal-overlay-show");    
  }      
});
