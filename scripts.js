/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 *
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your
 *    browser and make sure you can see that change.
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 *
 */


// // This is an array of strings (TV show titles)
// let titles = [
//   "Fresh Prince of Bel Air",
//   "Curb Your Enthusiasm",
//   "East Los High",
// ];
// Your final submission should have much more data than this, and
// you should use more than just an array of strings to store it all.

//example of song
//{
  //   id: 1,
  //   title: "strangers",
  //   artist: "proderics, melodybloom",
  //   genre: "Alternative",
  //   bpm: 134,
  //   streams: 152000000,
  //   annotation: "Reminds me of having nostalgia and reminiscing an old friend that drifted away."
  // },

// This function adds cards the page to display the data in the array
function showCards() {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  const templateCard = document.querySelector(".card");

  for (let i = 0; i < songs.length; i++) {
    let song = songs[i];
    // This part of the code doesn't scale very well! After you add your
    // own data, you'll need to do something totally different here.
    const nextCard = templateCard.cloneNode(true); // Copy the template card
    nextCard.style.display = "block";
    nextCard.querySelector(".card-content").innerHTML = `
        <p class="card-number">${song.id}.</p>
        <h2 class="card-title">${song.title}</h2>
        <p class="card-artist">${song.artist}</p>
        <p class="card-content">${song.annotation}</p>
        <p class="card-content">Streams: ${song.streams}</p>
        <p class="card-content">Genre: ${song.genre} BPM: ${song.bpm}</p>
    `;
    cardContainer.appendChild(nextCard); // Add new card to the container
  }
}

// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", showCards);

function quoteAlert() {
  console.log("Button Clicked!");
  alert(
    "I guess I can kiss heaven goodbye, because it got to be a sin to look this good!",
  );
}

function removeLastCard() {
  songs.pop(); // Remove last item in titles array
  showCards(); // Call showCards again to refresh
}
