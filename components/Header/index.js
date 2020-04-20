// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

const headerData = {
  date: "SMARCH 28, 2019",
  title: "Lambda Times",
  temp: "98°",
};
function Header() {
  const headerH = document.createElement("div");
  const headerD = document.createElement("span");
  const headerL = document.createElement("h1");
  const headerTemp = document.createElement("span");

  headerH.classList.add("header");
  headerD.classList.add("date");
  headerTemp.classList.add("temp");

  headerD.textContent = `${headerData.date}`;
  headerL.textContent = `${headerData.title}`;
  headerTemp.textContent = `${headerData.temp}`;

  headerH.appendChild(headerD);
  headerH.appendChild(headerL);
  headerH.appendChild(headerTemp);

  return headerH;
}

const headerContainer = document.querySelector(".header-container");

headerContainer.appendChild(Header());
