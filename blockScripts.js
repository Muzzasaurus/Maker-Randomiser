function randomiseBlock(num) {
	let blockChoice = Math.floor(Math.random()*36)+1;
	let blockHue = Math.floor(Math.random()*360)-179;
	let blockSat = Math.floor(Math.random()*400)-1;
	let blockVal = Math.floor(Math.random()*200)-1;
	document.getElementById(`hueSlider${num}`).value = blockHue;
	document.getElementById(`satSlider${num}`).value = blockSat;
	document.getElementById(`valSlider${num}`).value = blockVal;
	document.getElementById(`block${num}Image`).setAttribute(`src`, `Blocks/Block ${blockChoice}.png`);
	document.getElementById(`block${num}ImageUnfiltered`).setAttribute(`src`, `Blocks/Block ${blockChoice}.png`);
	updateImg(1);
	updateImg(2);
}
function updateImg(num) {
	let hue = document.getElementById(`hueSlider${num}`).value;
	let sat = document.getElementById(`satSlider${num}`).value/100;
	let val = document.getElementById(`valSlider${num}`).value/100;
	document.getElementById(`block${num}Image`).style.filter = `hue-rotate(${hue}deg) saturate(${sat}) brightness(${val})`;
	if (hue >= 0) {
		document.getElementById(`hueTracker${num}`).innerHTML = `Hue +${hue}`;
	} else {
		document.getElementById(`hueTracker${num}`).innerHTML = `Hue ${hue}`;
	}
	document.getElementById(`satTracker${num}`).innerHTML = `Sat x${sat}`;
	if (val >=1) {
		document.getElementById(`valTracker${num}`).innerHTML = `Val ${Math.round((val*100)-100)}%`;
	} else {
		document.getElementById(`valTracker${num}`).innerHTML = `Val x${val}`;
	}
}