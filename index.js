// burger menu
const btn = document.getElementById("menu-btn");
const nav = document.getElementById("menu");

function navToggle() {
  btn.classList.toggle("open");
  nav.classList.toggle("hidden");
  document.body.classList.toggle("no-scroll");
}

btn.addEventListener("click", navToggle);

//

const urlParams = new URLSearchParams(window.location.search);
const employee = urlParams.get("employee");
console.log(employee);

const url = `https://kea2sem-3ab4.restdb.io/rest/trooper?q={"name" : {"$in" : ["${employee}"]}}`;

console.log(url);

const options = {
  headers: {
    "x-apikey": "638777d6c890f30a8fd1f64d",
  },
};

fetch(url, options)
  .then((res) => res.json())
  .then((data) => showEmploye(data));

function getEmploye(employee) {
  employee.forEach(showEmploye);
}

function showEmploye(dr) {
  const employee = dr[0];
  document.querySelector("h2").innerHTML = "<h2>" + employee.name + "</h2>";
  document.querySelector("h3").innerHTML =
    "<h3>" + employee.worktitle + "</h3>";
  document.querySelector("p").innerHTML = "<p>" + employee.abouttext + "</p>";

  document.querySelector("#employee_img").setAttribute("src", employee.img);
  document.querySelector("#employee_img").setAttribute("alt", employee.name);
}
