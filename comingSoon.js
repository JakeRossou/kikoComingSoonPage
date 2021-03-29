const navbarItem = document.querySelectorAll(".item");
const toggleButton = document.querySelector(".toggle");

function makeActive() {
    for (let i=0; i<navbarItem.length; i++){
        navbarItem[i].classList.toggle('active');
    }
  }

toggleButton.addEventListener("click",makeActive);