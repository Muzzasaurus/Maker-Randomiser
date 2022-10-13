function randomiseBg(num) {
	let bgChoice = Math.floor(Math.random()*21)+1;
	let bgHue = Math.floor(Math.random()*360)-179;
	let bgSat = Math.floor(Math.random()*400)-1;
	let bgVal = Math.floor(Math.random()*200)-1;
	document.getElementById(`hueSlider${num+4}`).value = bgHue;
	document.getElementById(`satSlider${num+4}`).value = bgSat;
	document.getElementById(`valSlider${num+4}`).value = bgVal;
	document.getElementById(`bg${num}Image`).setAttribute(`src`, `Bg/Bg ${bgChoice}.png`);
	document.getElementById(`bg${num}ImageUnfiltered`).setAttribute(`src`, `Bg/Bg ${bgChoice}.png`);
	updateBgImg(1);
}
function updateBgImg(num) {
	let hue = document.getElementById(`hueSlider${num+4}`).value;
	let sat = document.getElementById(`satSlider${num+4}`).value/100;
	let val = document.getElementById(`valSlider${num+4}`).value/100;
	document.getElementById(`bg${num}Image`).style.filter = `hue-rotate(${hue}deg) saturate(${sat}) brightness(${val})`;
	if (hue >= 0) {
		document.getElementById(`hueTracker${num+4}`).innerHTML = `Hue +${hue}`;
	} else {
		document.getElementById(`hueTracker${num+4}`).innerHTML = `Hue ${hue}`;
	}
	document.getElementById(`satTracker${num+4}`).innerHTML = `Sat x${sat}`;
	if (val >=1) {
		document.getElementById(`valTracker${num+4}`).innerHTML = `Val ${Math.round((val*100)-100)}%`;
	} else {
		document.getElementById(`valTracker${num+4}`).innerHTML = `Val x${val}`;
	}
}