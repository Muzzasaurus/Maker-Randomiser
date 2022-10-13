const genres = ["no music", "plains", "cave", "factory", "desert", "ocean", "space", "boss", "goofy", "dance", "chill", "abstract", "eerie", "castle"]
const songs = [
["A new beginning", "Jumper 2", "Dog Days", "-Glorious morning-", "Light Action ~ No Yoke in Casablanca", "dog'n duck jog", "草原の民", "Sonorously Box", "カバルの丘", "Rosa Nera", "Deep Woods 4"],
["Lost", "-Cove-", "予兆", "Incredible", "Bewitching, 101", "Secrets of Kingdom", "Ice Cave", "Frozen Forest"],
["Space Lasagna", "Eidolon Step", "Metropolis [8-Bit]", "-Time Machine-", "-Haunted woods-", "Twenty-Six O-Eight", "When The Time Comes (Take Down The Corporate)", "Silent Machine"],
["The Great Sand Sea", "アバタール", "Desert Level", "赤の砂丘"],
["The Sunken City", "sanctuary", "Beach Party", "Beach 2"],
["Galaxy Walker", "Space Magic", "Edge of the galaxy", "Blessing Of The Moon", "Electric Vibe", "Somewhere In Outer Space", "A Long Way", "Freedom"],
["Battlezone", "Epic", "Extreme Action", "Flames of Orion ~ Yesterday's Descent", "refrectable", "ハクギン", "Hitman", "Fly of Beelzebub", "Action Dynamic Track #1", "Unseen Enemy"],
["Battle against a funny dude", "Jazz Comedy", "Jazzy Frenchy", "魔法のクッキング", "Corncob", "Onion Capers", "BT GIRLS", "Cat and Mouse Rag"],
["Little Flame", "Colors!", "Your Everyday Happycore", "Shift", "Elemelons", "Brazil Samba", "HyperioxX", "1NF3S+@+!0N", "プラスチックアドベンチャー", "Infiltration", "midstream jam"],
["Pub In The Woods", "Curse of the Inner Self", "Wake Up", "電脳漂流記", "inherit the Light Trail", "I Wanna Nin", "wood note", "彼岸", "Island of Healing", "Obsolete Sky", "雪と子供", "reedz", "Azure Apex", "A Wistful Wish", "Pulsar", "Saturdays", "Dreams Of Love and Literature", "R", "Place On Fire", "Viscid", "Concept Stem", "Bittersweet", "Scenic ride", "Shatter", "Vanilla", "Just A Daydream", "Mountain Highway", ":D", "- Another Dawn -"],
["Classic Dynamic Track", "The Edge Of The Village", "Black Friday !!", "Memory", "Tiles Of Topia", "Try again", "-Clutterfunk-", "Pc Song Instrumental", "Sines of Respect", "Big Potato", "-Summer memories-", "-Pixelspace-", "Star Gate", "Infinity", "Swing-Bit Brawl-", "Red 13", "Chaoz Airflow", "Concentrate", "Our Legacy"],
["堕天", "Graveyard Shift", "報いの始まり", "The 4th Dimension", "Hadopelagic Pressure", "Just Monika.", "Sailent", "CreepyCapers"],
["Retro RPG Dungeon", "Sneaky Snitch", "Mischief Maker", "March of the Spoons", "The Wizard's Grimoire"]
]
function switchTo(menu) {
	document.getElementById(`blockMenu`).style.display = "none";
	document.getElementById(`spikeMenu`).style.display = "none";
	document.getElementById(`bgMenu`).style.display = "none";
	document.getElementById(`flagMenu`).style.display = "none";
	document.getElementById(`musicMenu`).style.display = "none";
	document.getElementById(`jumpMenu`).style.display = "none";
	document.getElementById(`${menu}Menu`).style.display = "block";
	
}
function randomiseObjPos() {
	x = Math.floor(Math.random()*24)+1;
	y = Math.floor(Math.random()*18)+1;
	document.getElementById("flagPos").style.top = `${y*32}px`;
	document.getElementById("flagPos").style.left = `${x*32}px`;
	document.getElementById("flagPos").style.display = "block";
	x = Math.floor(Math.random()*24)+1;
	y = Math.floor(Math.random()*18)+1;
	document.getElementById("warpPos").style.top = `${y*32}px`;
	document.getElementById("warpPos").style.left = `${x*32}px`;
	document.getElementById("warpPos").style.display = "block";
}
function randomiseGenre() {
	let chosenGenre = genres[Math.floor(Math.random()*genres.length-1)+1];
	document.getElementById("genreResults").innerHTML = `Genre: ${chosenGenre}`;
	if (chosenGenre != "no music") {
		chosenGenre = genres.indexOf(chosenGenre)-1;
		chosenSong = songs[chosenGenre][Math.floor(Math.random()*songs[chosenGenre].length-1)+1];
		document.getElementById("songResults").innerHTML = `Song: ${chosenSong}`;
	}
}