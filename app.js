var getnavitem = document.querySelectorAll(".nav-item");
console.log(getnavitem);

function clickactive() {
  for (let i = 0; i < getnavitem; i++) {
    getnavitem[i].addEventListener("click", function () {
      console.log("clicked");
    });
  }
}
