const jumps = [
/* 1 Star */["Gate", "Half Diagonal", "Pineapple Jump", "Shuriken", "Sideways Gate", "T-Bone", "Crusher"],
/* 2 Star */["Cherry Ledge", "Bubble", "16 Pixel", "Diagonal", "Drop Gate", "Half Diamond", "M Jump 2", "M Jump", "Rukito Ledge", "T-Bone Vortex", "Scrotum", "Platform Jump", "Trophy Jump", "Diamond", "Driek Jump 2"],
/* 3 Star */["Buffed Diagonal 2", "Buffed Diagonal", "Corner", "Charlie", "DJump Diamond", "Ceiling Double Diamond", "Double Diamond", "4 5 Block", "Hourglass", "Invert", "Ledge", "M Jump 3", "Nine Jump", "Plane", "Rukito Jump", "Sphincter", "Steak", "Super F", "John Corner", "Driek Jump"],
/* 4 Star */["Topi Jump", "Cascade", "DJump Ceiling Diamond", "Double DPlane", "Double Invert", "DPlane", "Hades Ledge", "Hades Plane", "Mini F", "Leehe Jump", "Double Driek Jump"],
/* 5 Star */["Cosowl", "2 5 Floor Invert", "Double Plane", "EX15", "Killer Block F Jump"],
/* 6 Star */["Hendeca Corner"]
]
minDifficulty = 0;
maxDifficulty = 5;
jumpNum=0;
totalDifficulty = 0;
function randomiseJump() {
	jumpNum++;
	if (Math.floor(Math.random()*1000000) == 0) {
		jumpDifficulty = 5
	} else {
		jumpDifficulty = Math.floor(Math.random()*(maxDifficulty-minDifficulty)+minDifficulty);
	}
	totalDifficulty += jumpDifficulty+1;
	let jumpChoice = jumps[jumpDifficulty][Math.floor(Math.random()*jumps[jumpDifficulty].length)];
	document.getElementById(`jumpImage`).setAttribute(`src`, `Jumps/${jumpChoice}.png`);
	if (jumpChoice == "4 5 Block") {
		document.getElementById(`jumpName`).innerHTML = `Jump ${jumpNum}: 4.5 Block`;
	} else if (jumpChoice == "2 5 Floor Invert") {
		document.getElementById(`jumpName`).innerHTML = `Jump ${jumpNum}: 2.5 Floor Invert`;
	} else {
		document.getElementById(`jumpName`).innerHTML = `Jump ${jumpNum}: ${jumpChoice}`;
	}
	document.getElementById("jumpDifficulty").innerHTML = "";
	for (let i = 0; i < jumpDifficulty+1; i++) {
		document.getElementById("jumpDifficulty").innerHTML += "★";
	}
	for (let i = 0; i < 4-jumpDifficulty; i++) {
		document.getElementById("jumpDifficulty").innerHTML += "☆";
	}
	console.log("total difficulty: " + totalDifficulty);
}
function maxStars(num) {
	maxDifficulty = num;
	document.getElementById("dropDownDifficulty").innerHTML = `Max Difficulty: ${maxDifficulty}★`;
}
function minStars(num) {
	minDifficulty = num;
	document.getElementById("dropDownMinDifficulty").innerHTML = `Min Difficulty: ${minDifficulty+1}★`;
}