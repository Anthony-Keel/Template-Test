
let apiQuotes = [];

// Show new quote
function newQuote(){
    // pick a random quote
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    console.log(quote);
}

// Get quote from API
async function getQuotes() {
    const apiUrl ='https://type.fit/api/quotes';

    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();

    }catch (error) {
        // catch error here

    }
}


// onload
getQuotes();
