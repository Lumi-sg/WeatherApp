export default function loadTheToad() {
	const location = (document.querySelector(".location").textContent = "...Loading");
	const hypnogod = new Image();
	hypnogod.src = "https://media.tenor.com/r5FOkTjCCfMAAAAC/hypnotoad-futurama.gif";
	document.body.style.backgroundImage = "url('" + hypnogod.src + "')";
	console.log("loadTheToad.js: The toad load code ode mode road has been bestowed");
}
