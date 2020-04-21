// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.

axios

  .get("https://lambda-times-backend.herokuapp.com/articles")
  .then((res) => {
    const ArticlesA = res.data.articles.javascript;
    ArticlesA.data = "javascript";
    const ArticlesB = res.data.articles.bootstrap;
    ArticlesB.data = "bootstrap";
    const ArticlesC = res.data.articles.technology;
    ArticlesC.data = "technology";
    const ArticlesD = res.data.articles.jquery;
    ArticlesD.data = "jquery";
    const ArticlesE = res.data.articles.node;
    ArticlesE.data = "node.js";

    const articles = [ArticlesA, ArticlesB, ArticlesC, ArticlesD, ArticlesE];
    articles.forEach((article) => {
      article.forEach((art) => {
        const cards = document.querySelector(".cards-container");
        const card = Article(art);

        card.setAttribute("data-tab", article.data);
        cards.appendChild(card);
      });
    });

    console.log(res);
  })

  .catch((err) => {
    console.log(err);
  });

function Article(obj) {
  const card = document.createElement("div");
  const headline = document.createElement("div");
  const author = document.createElement("div");
  const imgContainer = document.createElement("div");
  const img = document.createElement("img");
  const authorName = document.createElement("span");

  card.classList.add("card");
  headline.classList.add("headline");
  author.classList.add("author");
  imgContainer.classList.add("img-container");

  headline.textContent = obj.headline;
  authorName.textContent = obj.authorName;
  img.src = obj.authorPhoto;

  imgContainer.appendChild(img);
  author.appendChild(imgContainer);
  author.appendChild(authorName);
  card.appendChild(headline);
  card.appendChild(author);

  return card;
}
