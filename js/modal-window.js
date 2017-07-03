  var press = document.querySelector(".btn-contacts");
  var popup = document.querySelector(".modal-content");
  var close = popup.querySelector(".modal-content-close");
  var lay = document.querySelector(".modal-overlay");

  press.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.add("modal-content-show");
    lay.classList.add("modal-overlay-show");
    
  });
  close.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.remove("modal-content-show");
    lay.classList.remove("modal-overlay-show");
  });

  