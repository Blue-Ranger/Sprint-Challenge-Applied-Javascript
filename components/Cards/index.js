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
    const ArticleA = res.data.articles.javascript;
    ArticleA.data = "javascript";
    const ArticleB = res.data.articles.bootstrap;
    ArticleB.data = "bootstrap";
    const ArticleC = res.data.articles.technology;
    ArticleC.data = "technology";
    const ArticleD = res.data.articles.jquery;
    ArticleD.data = "jquery";
    const ArticleE = res.data.articles.node;
    ArticleE.data = "node.js";

    const articles = [ArticleA, ArticleB, ArticleC, ArticleD, ArticleE];

    article.forEach((article) => {
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
  headerline.classList.add("headline");
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
