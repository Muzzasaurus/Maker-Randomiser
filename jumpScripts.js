const jumps = [
["Gate", "Half Diagonal", "Pineapple Jump", "Shuriken", "Sideways Gate", "T-Bone", "Crusher"],
["Cherry Ledge", "Bubble", "16 Pixel", "Diagonal", "Drop Gate", "Half Diamond", "M Jump 2", "M Jump", "Rukito Ledge", "T-bone Vortex", "Scrotum", "Platform Jump"],
["Buffed Diagonal 2", "Buffed Diagonal", "Corner", "Charlie", "DJump Diamond", "Ceiling Double Diamond", "Double Diamond", "4 5 Block", "Hourglass", "Invert", "Ledge", "Leehe Jump", "M Jump 3", "Nine Jump", "Plane", "Rukito Jump", "Sphincter", "Steak", "Super F"],
["Topi Jump", "Cascade", "DJump Ceiling Diamond", "Double DPlane", "Double Invert", "DPlane", "Hades Ledge", "Hades Plane", "Mini F"],
["Cosowl", "2 5 Floor Invert", "Double Plane", "EX15", "Killer Block F Jump"]
]
maxDifficulty = 5;
function randomiseJump() {
	let jumpDifficulty = Math.floor(Math.random()*maxDifficulty);
	let jumpChoice = jumps[jumpDifficulty][Math.floor(Math.random()*jumps[jumpDifficulty].length)];
	document.getElementById(`jumpImage`).setAttribute(`src`, `Jumps/${jumpChoice}.png`);
	if (jumpChoice == "4 5 Block") {
		document.getElementById(`jumpName`).innerHTML = `Jump: 4.5 Block`;
	} else if (jumpChoice == "2 5 Floor Invert") {
		document.getElementById(`jumpName`).innerHTML = `Jump: 2.5 Floor Invert`;
	} else {
		document.getElementById(`jumpName`).innerHTML = `Jump: ${jumpChoice}`;
	}
	document.getElementById("jumpDifficulty").innerHTML = "";
	for (let i = 0; i < jumpDifficulty+1; i++) {
		document.getElementById("jumpDifficulty").innerHTML += "★";
	}
	for (let i = 0; i < 4-jumpDifficulty; i++) {
		document.getElementById("jumpDifficulty").innerHTML += "☆";
	}
}
function maxStars(num) {
	maxDifficulty = num;
	document.getElementById("dropDownDifficulty").innerHTML = `Max Difficulty: ${maxDifficulty}★`;
}