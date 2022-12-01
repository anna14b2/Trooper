const url = "https://kea2sem-3ab4.restdb.io/rest/trooper";

//API 638777d6c890f30a8fd1f64d

// the API key

const options = {
  headers: {
    "x-apikey": "638777d6c890f30a8fd1f64d",
  },
};

fetch(url, options)
  .then((response) => {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response.json();
  })
  .then((data) => {
    // we have the data
    gotData(data);
  })
  .catch((e) => {
    // Something went wrong
    console.error("An error occured:", e.message);
  });

function gotData(data) {
  data.forEach(showEmploye);
}

function showEmploye(employee) {
  console.log(employee);

  //make a template
  //grab it
  const template = document.querySelector(".template").content;
  //clone it
  const clone = template.cloneNode(true);
  //populate with data
  clone.querySelector("h3").textContent = employee.name;
  clone.querySelector("h4").textContent = employee.worktitle;
  clone.querySelector("img").setAttribute("src", employee.imgmain);
  clone.querySelector("img").setAttribute("alt", employee.name);

  //append it to the dom
  const elemParent = document.querySelector("#about_section5");
  elemParent.appendChild(clone);
}
