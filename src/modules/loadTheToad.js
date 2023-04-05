export default function loadTheToad() {
	const location = document.querySelector(".location");
	location.textContent = "...Loading";

	const hypnogod = new Image();
	hypnogod.onload = () => {
		document.body.style.backgroundImage = `url('${hypnogod.src}')`;
		console.log("loadTheToad.js: The toad load code ode mode road has been bestowed");
	};
	hypnogod.onerror = () => {
		console.log("loadTheToad.js: The toad image failed to load");
	};
	hypnogod.src = "https://media.tenor.com/r5FOkTjCCfMAAAAC/hypnotoad-futurama.gif";
}
