document.addEventListener("DOMContentLoaded", function () {
    
    //Get the search input
    const searchInput = document.getElementById("attractionSearch");

    //Get all attraction cards
    const attractionCards = document.querySelectorAll(".card");

    //Get the search message
    const searchMessage = document.getElementById("searchMessage");

    //Listen for type in the search bar
    searchInput.addEventListener("input", function () {

        //Get the user's search text
        const searchText = searchInput.value.toLowerCase().trim();

        //Count matching attractions
        let visibleCards = 0;

        //Check every attraction card
        attractionCards.forEach(function (card) {

            //Get the text inside the card
            const cardText = card.textContent.toLowerCase();

            //Check whether the card matches
            if (cardText.includes(searchText)) {
                card.style.display = "block";
                visibleCards++;
            } else {
                card.style.display = "none";
            }
        });

        //Display a message if nothing matches
        if (visibleCards === 0 ) {
            searchMessage.textContent = "No attractions found. Try another search.";
        } else {
            searchMessage.textContent = visibleCards + "attraction(s) found."
        }
    });
});