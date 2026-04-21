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

let activeGenre = "all";

//function to format large numbers:
function formatStreams(num) {
  if (num >= 1000000000) {
    return (num / 1000000000).toFixed(1) + " Billion";
  } else if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + " Million";
  } else {
    return (num / 1000).toFixed(1) + " Thousand";
  }
}



// This function adds cards the page to display the data in the array
//showcards now affects "showing ... cards"
function showCards() {
  document.getElementById("numSongs").textContent = songs.length; // update numsongs here
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  const templateCard = document.querySelector(".card");


  //sorting
  let sortedSongs = [...songs]; //makes copy of songs arr not reference
  const sortValue = document.getElementById("sortSelect").value;

  if(sortValue === "bpm-asc") {
    sortedSongs.sort(function(a, b) { return a.bpm - b.bpm; });
  }
  else if(sortValue === "bpm-desc") {
    sortedSongs.sort(function(a,b) { return b.bpm - a.bpm });
  }
  else if(sortValue === "streams-asc") {
    sortedSongs.sort(function(a,b) { return a.streams - b.streams; });
  }

  else if(sortValue === "streams-desc") {
    sortedSongs.sort(function(a,b) { return b.streams - a.streams; });
  }

  //searching
  const search = document.getElementById("searchInput").value.toLowerCase();

  let cardsShown = sortedSongs.length;
  for (let i = 0; i < sortedSongs.length; i++) {
    let song = sortedSongs[i];

    //genre filter
    if(activeGenre !== "all" && song.genre.toLowerCase() !== activeGenre.toLowerCase()) {
      cardsShown -= 1;
      continue;
    }

    //searching
    let songInfo = song.title.toLowerCase() + " " + song.artist.toLowerCase();
    if(!songInfo.includes(search)) {
      cardsShown -= 1;
      continue;
    }

    const nextCard = templateCard.cloneNode(true); // Copy the template card
    nextCard.style.display = "block";
    nextCard.querySelector(".card-content").innerHTML = `
        <p class="card-number">${song.id}.</p>
        <h2 class="card-title">${song.title}</h2>
        <p class="card-artist">${song.artist}</p>
        <div class="card-tags">
          <span class="tag genre-tag">${song.genre}</span>
          <span class="tag">${song.bpm} BPM</span>
        </div>
        <div class="bpm-row">
          <span class="bpm-label">BPM</span>
          <div class="bpm-bar-track">
          <div class="bpm-bar-fill" style="width: ${Math.round((song.bpm / 200) * 100)}%"></div>
          </div>
          <span class="bpm-value">${song.bpm}</span>
        </div>
        <p class="card-streams">streams: <span>${formatStreams(song.streams)}</span></p>
        <p class="card-annotation">${song.annotation}</p>
    `;
    cardContainer.appendChild(nextCard); // Add new card to the container
  }
  //after loop
  document.getElementById("resultsCount").innerHTML = `showing ${cardsShown} of ${sortedSongs.length} songs`;
}

function toggleTheme() {
  let theme = document.documentElement.getAttribute("data-theme");
  if(theme === "dark") {
    document.documentElement.setAttribute("data-theme", "light");
  }
  else document.documentElement.setAttribute("data-theme", "dark");
  //data-theme="light"
}

// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", function() {
  showCards();

  const backToTop = document.getElementById("backToTop");
  window.addEventListener("scroll", function() {
    if (window.scrollY > 300) {
      backToTop.classList.add("visible");
    } else {
      backToTop.classList.remove("visible");
    }
  });
  backToTop.addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  document.getElementById("themeToggle").addEventListener("click", toggleTheme);

  document.getElementById("searchInput").addEventListener("input", showCards);
  //change is bad because u have to click out or enter
  //use input so it fires for every keystroke
  document.getElementById("sortSelect").addEventListener("change", showCards);
  const genreButtons = document.querySelectorAll(".genre-btn");

  for (let i = 0; i < genreButtons.length; i++) {
    genreButtons[i].addEventListener("click", function() {
      activeGenre = this.dataset.genre;
      // loop through every genre button
    for (let j = 0; j < genreButtons.length; j++) {
      genreButtons[j].classList.remove("active"); // remove the green highlight from all of them
    }
    this.classList.add("active"); // add green highlight to the one that was clicked
      showCards();
    });
  }
});

function quoteAlert() {
  console.log("Button Clicked!");
  alert(
    "I guess I can kiss heaven goodbye, because it got to be a sin to look this good!",
  );
}

function removeLastCard() {
  songs.pop(); // Remove last item in songs array
  showCards(); // Call showCards again to refresh
  //im noticing it looks like the implementation is wrong when im using genre filter 
  //because it deletes even the ones not shown idk if i should fix this later
}


