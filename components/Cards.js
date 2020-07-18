// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
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
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.
axios.get('https://lambda-times-backend.herokuapp.com/articles').then(response => {
     const articleData = response.data.articles; 
     Object.values(articleData).forEach((articles) => {
         articles.forEach((article) => {
             cards.appendChild(articleMaker(article));
         })
     })

     console.log(response.data.articles);

 }).catch(error => {
     console.log(error); 
 }); 

const cards = document.querySelector('.cards-container'); 

console.log(cards);

function articleMaker(object){
    
    const articleCard = document.createElement('div'); 
    articleCard.classList.add('card'); 

    const headline = document.createElement('div'); 
    headline.classList.add('headline'); 
    headline.textContent = object.headline;
    articleCard.appendChild(headline); 

    const authorBox = document.createElement('div'); 
    authorBox.classList.add('author'); 
    articleCard.appendChild(authorBox); 

    const authorFrame = document.createElement('div');
    authorFrame.classList.add('img-container'); 
    const authorImg = document.createElement('img'); 
    authorImg.src = object.authorPhoto;
 
    authorFrame.appendChild(authorImg);
    authorBox.appendChild(authorFrame); 

    const author = document.createElement('span'); 
    author.textContent = 'By ' + object.authorName; 
    authorFrame.appendChild(author); 

    articleCard.addEventListener('click', () => {
        console.log(articleHeadline.textContent); 
    });

    return articleCard; 
} 