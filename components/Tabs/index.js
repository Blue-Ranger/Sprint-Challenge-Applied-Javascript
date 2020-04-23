// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>

const tabs = document.querySelector(".tabs");
const topics = document.querySelector(".topics");

axios
  .get("https://lambda-times-backend.herokuapp.com/topics")
  .then((res) => {
    const someTab = res.data.topics;
    someTab.forEach((tab) => {
      const newTab = trendingTopics(tab);
      topics.appendChild(newTab);
    });
    console.log(res);
  })
  .catch((error) => {
    console.log(error);
  });

const trendingTopics = (topic) => {
  const tab = document.createElement("div");
  tab.classList.add("tab");
  tab.textContent = topic;

  return tab;
};
