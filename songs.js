const songs = [
  {
    id: 1,
    title: "strangers",
    artist: "proderics, melodybloom",
    genre: "Alternative",
    bpm: 134,
    streams: 152000000,
    annotation: "Reminds me of having nostalgia and reminiscing an old friend that drifted away."
  },
  {
    id: 2,
    title: "Dark Thoughts",
    artist: "Lil Tecca",
    genre: "Hip-Hop/Rap",
    bpm: 102,
    streams: 452000000,
    annotation: "Super dancey, very positive, instant mood uplift."
  },
  {
    id: 3,
    title: "U Weren't Here I Really Miss You",
    artist: "Cult Member, Mia Martina",
    genre: "Alternative",
    bpm: 123,
    streams: 107000000,
    annotation: "Ethereal, almost makes me think about urbexing."
  },
  {
    id: 4,
    title: "Drugs",
    artist: "Sonic Mine",
    genre: "Dance",
    bpm: 145,
    streams: 15400000,
    annotation: "Super fast tempo, kinda danceable, I liked it for gym."
  },
  {
    id: 5,
    title: "You Are In My System (Faster Horses Sport Mix)",
    artist: "Kerri Chandler, Dennis Quin, Troy Denari, Faster Horses",
    genre: "House",
    bpm: 128,
    streams: 57000000,
    annotation: "Very groovy, I love house like this, totally danceable."
  },
  {
    id: 6,
    title: "Love Won't Wait",
    artist: "Bobby Caldwell",
    genre: "Jazz",
    bpm: 115,
    streams: 4400000,
    annotation: "Almost makes me sad how emotional the first part is even though it's upbeat. Reminds me of someone madly in love."
  },
  {
    id: 7,
    title: "smezir_2",
    artist: "ilyhiryu",
    genre: "Dance",
    bpm: 150,
    streams: 10500000,
    annotation: "I really liked this for gym and gaming."
  },
  {
    id: 8,
    title: "на грани болевого порога (hardstyle)",
    artist: "sozer",
    genre: "Electronic",
    bpm: 180,
    streams: 7340000,
    annotation: "Super unique song, reminds me of difficult gaming. Love how it's non-English."
  },
  {
    id: 9,
    title: "keep steady",
    artist: "sosocamo",
    genre: "Hip-Hop/Rap",
    bpm: 120,
    streams: 105000000,
    annotation: "GOTODAMOON — this song is just so satisfying. Reminds me of just being successful and happy."
  },
  {
    id: 10,
    title: "Under Your Spell",
    artist: "Snow Strippers",
    genre: "Electronic",
    bpm: 145,
    streams: 365000000,
    annotation: "I listened to this song a lot when I used to bike a ton. I felt very free then."
  },
  {
    id: 11,
    title: "three",
    artist: "Cult Member",
    genre: "Dance",
    bpm: 126,
    streams: 27800000,
    annotation: "I feel like I'm at a low key club — does that even make sense?"
  },
  {
    id: 12,
    title: "It's A Dream (feat. Lil Uzi Vert)",
    artist: "Snow Strippers, Lil Uzi Vert",
    genre: "Dance",
    bpm: 146,
    streams: 41600000,
    annotation: "Very high energy, unique. Seen lots of edits on social media with this song and honestly associating it with those edits makes it so much cooler."
  },
  {
    id: 13,
    title: "archangel",
    artist: "DJ Anemia, crier, sixnite",
    genre: "Electronic",
    bpm: 120,
    streams: 22800000,
    annotation: "Reminds me of improving in gaming."
  },
  {
    id: 14,
    title: "i love u.",
    artist: "wiv",
    genre: "Dance",
    bpm: 112,
    streams: 28400000,
    annotation: "House but like electronic and subtle soft sounds."
  },
  {
    id: 15,
    title: "Solitude",
    artist: "juno, blindheart",
    genre: "Electronic",
    bpm: 111,
    streams: 33200000,
    annotation: "Eerie urbex vibe but also cool."
  },
  {
    id: 16,
    title: "Picture in My Mind",
    artist: "PinkPantheress, Sam Gellaitry",
    genre: "Pop",
    bpm: 129,
    streams: 80900000,
    annotation: "So dancy and upbeat. PinkPantheress and Sam Gellaitry is a goated collab."
  },
  {
    id: 17,
    title: "B.O.T.A. (Baddest Of Them All)",
    artist: "Eliza Rose, Interplanetary Criminal",
    genre: "House",
    bpm: 137,
    streams: 513000000,
    annotation: "I don't know what instrument they use in the melody but it's super satisfying. Super danceable, pure house."
  },
  {
    id: 18,
    title: "Jealous",
    artist: "Eyedress",
    genre: "Indie Rock",
    bpm: 93,
    streams: 1370000000,
    annotation: "Reminds me of skating."
  },
  {
    id: 19,
    title: "New Person, Same Old Mistakes",
    artist: "Tame Impala",
    genre: "Alternative",
    bpm: 152,
    streams: 896000000,
    annotation: "Tame Impala is the GOAT. No further comments."
  },
  {
    id: 20,
    title: "4 Morant (Better Luck Next Time)",
    artist: "Com Truise",
    genre: "Alternative",
    bpm: 170,
    streams: 200000000,
    annotation: "I know it's bad because it's a bp audio but it's so cool. Makes me think about people who never got to achieve everything they wanted and motivates me to reach my goals."
  },
  {
    id: 21,
    title: "Duvet",
    artist: "bôa",
    genre: "Alternative",
    bpm: 93,
    streams: 1130000000,
    annotation: "All the sounds in this work so well together, it's beautiful."
  },
  {
    id: 22,
    title: "Fever - Solo",
    artist: "fakemink archive",
    genre: "Hip-Hop/Rap",
    bpm: 115,
    streams: 92900000,
    annotation: "Upbeat song, it's pretty happy but for me it has some sad semantics."
  },
  {
    id: 23,
    title: "The Path Less Travelled",
    artist: "Vegyn",
    genre: "Electronic",
    bpm: 112,
    streams: 19100000,
    annotation: "Makes me think about hitting the end of a chapter in life and moving on to a new one."
  },
  {
    id: 24,
    title: "gymnastics (cece natalie house remix)",
    artist: "Cece Natalie",
    genre: "Alternative",
    bpm: 124,
    streams: 2560000,
    annotation: "I wish I knew what instruments they used, it's so cool and catchy."
  },
  {
    id: 25,
    title: "Talk To You",
    artist: "ANOTR, 54 Ultra",
    genre: "House",
    bpm: 132,
    streams: 33100000,
    annotation: "Pure bliss song. Reminds me of summer vacation."
  }
];