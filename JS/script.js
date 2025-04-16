function codeCHalao() {
  console.log("JS is working...");
  let h1 = document.getElementById("h1");
  h1.innerHTML = "JS IS COOL";
  h1.style.color = "red";

  let image = document.getElementById("img");
  image.src = "../src/new.jpg";

  image.style.height = "200px";
  image.style.width = "300px";

  image.style.display = "none";
}

let btn = document.getElementById("btn");

btn.addEventListener("click", () => codeCHalao());

alert(navigator.geolocation.getCurrentPosition);

let a = function () {};
