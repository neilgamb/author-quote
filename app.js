function makeQuote(quote) {

    let parent = document.querySelector('.quote');
    let likeParent = document.querySelector('.likeCount');
    let quoteBox = document.querySelector('.quoteBox');

    let likes = document.createElement('p');
    likes.textContent = quote.likes;
    likes.classList.add("likes");

    let text = document.createElement('h1');
    text.textContent = quote.quote;
    text.classList.add("quoteText");

    let author = document.createElement('h3');
    author.textContent = "- "+quote.author;
    author.classList.add("quoteAuthor");

    likeParent.appendChild(likes);
    parent.appendChild(text);
    parent.appendChild(author);
    console.log(quote.pic);
    quoteBox.style.backgroundImage = "url("+quote.pic+")";
    

}



function getQuote(currentQuote) {

    let quotes = [
        {
            quote: "DON'T YOU THINK THAT IF I WERE WRONG, I'D KNOW IT?",
            author: "SHELDON COOPER",
            likes: 423,
            pic: "https://image.ibb.co/jhV1Sk/sheldoncooper2.jpg",
        },
        {
            quote: "I DON'T KNOW HIM WELL ENOUGH FOR A STOP AND CHAT.",
            author: "LARRY DAVID",
            likes: 572,
            pic: "https://image.ibb.co/mdfCYQ/larrydavid2.jpg",
        },
        {
            quote: "I'M AFRAID I JUST BLUE MYSELF",
            author: "TOBIAS FUNKE",
            likes: 419,
            pic: "https://image.ibb.co/n10CYQ/tobias2.jpg",
        },
        {
            quote: "THAT'S WHAT SHE SAID",
            author: "MICHAEL SCOTT",
            likes: 742,
            pic: "https://image.ibb.co/nHCRtQ/michaelscott2.jpg",
        },
        {
            quote: "D'OH!",
            author: "HOMER SIMPSON",
            likes: 610,
            pic: "https://image.ibb.co/bwM2YQ/homer2.jpg",
        },
    ];

    let quote = {
        quote: quotes[currentQuote].quote,
        author: quotes[currentQuote].author,
        likes: quotes[currentQuote].likes,
        pic: quotes[currentQuote].pic,
    }

    makeQuote(quote);

}

function deleteQuote() {

    let parent = document.querySelector('.quote');
    let likeParent = document.querySelector('.likeCount');
    let likes = document.querySelector('.likes');
    let text = document.querySelector('.quoteText');
    let author = document.querySelector('.quoteAuthor');

    likeParent.removeChild(likes);
    parent.removeChild(text);
    parent.removeChild(author);

}



window.addEventListener('load', function () {

    let currentQuote = 0;

    getQuote(currentQuote);


    let back = document.querySelector('.back');
    back.addEventListener('click', function () {

        if (currentQuote === 0) {
            return null;
        } else {
            currentQuote--;
            deleteQuote();
            getQuote(currentQuote);
        }
    });

    let forward = document.querySelector('.forward');
    forward.addEventListener('click', function () {

        if (currentQuote >= getQuotesLength()-1) {
            return null;
        } else {
            currentQuote++;
            deleteQuote();
            getQuote(currentQuote);
        }
    });


});


function getQuotesLength() {

    let quotes = [
        {
            quote: "DON'T YOU THINK THAT IF I WERE WRONG, I'D KNOW IT?",
            author: "SHELDON COOPER",
            likes: 423,
        },
        {
            quote: "I DON'T KNOW HIM WELL ENOUGH FOR A STOP AND CHAT.",
            author: "LARRY DAVID",
            likes: 572,
        },
        {
            quote: "I'M AFRAID I JUST BLUE MYSELF",
            author: "TOBIAS FUNKE",
            likes: 419,
        },
        {
            quote: "THAT'S WHAT SHE SAID",
            author: "MICHAEL SCOTT",
            likes: 742,
        },
        {
            quote: "D'OH!",
            author: "HOMER SIMPSON",
            likes: 610,
        },
    ];

    return quotes.length;
}