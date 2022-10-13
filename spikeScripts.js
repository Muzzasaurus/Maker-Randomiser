function randomiseSpike(num) {
	let spikeChoice = Math.floor(Math.random()*35)+1;
	let spikeHue = Math.floor(Math.random()*360)-179;
	let spikeSat = Math.floor(Math.random()*400)-1;
	let spikeVal = Math.floor(Math.random()*200)-1;
	document.getElementById(`hueSlider${num+2}`).value = spikeHue;
	document.getElementById(`satSlider${num+2}`).value = spikeSat;
	document.getElementById(`valSlider${num+2}`).value = spikeVal;
	document.getElementById(`spike${num}Image`).setAttribute(`src`, `Spikes/Spike ${spikeChoice}.png`);
	document.getElementById(`spike${num}ImageUnfiltered`).setAttribute(`src`, `Spikes/Spike ${spikeChoice}.png`);
	updateSpikeImg(1);
	updateSpikeImg(2);
}
function updateSpikeImg(num) {
	let hue = document.getElementById(`hueSlider${num+2}`).value;
	let sat = document.getElementById(`satSlider${num+2}`).value/100;
	let val = document.getElementById(`valSlider${num+2}`).value/100;
	document.getElementById(`spike${num}Image`).style.filter = `hue-rotate(${hue}deg) saturate(${sat}) brightness(${val})`;
	if (hue >= 0) {
		document.getElementById(`hueTracker${num+2}`).innerHTML = `Hue +${hue}`;
	} else {
		document.getElementById(`hueTracker${num+2}`).innerHTML = `Hue ${hue}`;
	}
	document.getElementById(`satTracker${num+2}`).innerHTML = `Sat x${sat}`;
	if (val >=1) {
		document.getElementById(`valTracker${num+2}`).innerHTML = `Val ${Math.round((val*100)-100)}%`;
	} else {
		document.getElementById(`valTracker${num+2}`).innerHTML = `Val x${val}`;
	}
}