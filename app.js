const $menu = document.querySelector("#menu");
const $form = document.querySelector("#light-form");
const $MCS = document.querySelector("#menu-code-status");
const $inpRg = document.querySelector("#brightness");
const $MSS = document.querySelector("#menu-span-status");
const $btn = document.querySelector("#light");
const $glowstOff = document.querySelector("#glowstone");
const img = document.querySelector("img");
const $divbg = document.querySelector(".bg");
const $textcolor1 = document.querySelector(".h1");
const $textcolor2 = document.querySelector(".h2");
const $sect = document.querySelector("#log-section");
const $caca = document.querySelector("#caca")
const ul = document.querySelector("#log-list")

const data = new FormData($form);

let etat = false;
let res = "on"

$btn.addEventListener("click", (e) => {
	$menu.showModal();
});

$form.addEventListener("submit", (e) => {
	const valueI = $caca.value
	const inptopac = $caca.value	 //25
	console.log(valueI)

	console.log("SUBMIT", inptopac);
	if (etat == false) {
		$MCS.textContent = "Off";
		$MSS.textContent = "Off";
		img.src = "assets/glowstone-on.webp";
		$divbg.classList.remove("light-off");
		$divbg.classList.add("light-on");
		img.style.opacity = inptopac / 100;
		$divbg.style.filter = `brightness(${inptopac / 100})`;
		etat = true;
		res = "on";
	} else if (etat == true) {
		$MCS.textContent = "On";
		$MSS.textContent = "On";
		img.src = "assets/glowstone-off.webp";
		$divbg.classList.remove("light-on");
		$divbg.classList.add("light-off");
		etat = false;
		res = "off";
	}
	//-----------------------------!-----------------------------\\
	function textinvertcolor(element) {
		const bg = window.getComputedStyle(element).backgroundColor;
		const [r, g, b] = bg.match(/\d+/g).map(Number);
		const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
		return luminance > 0.5 ? "#000000" : "#ffffff";
	}

	createLog(res + " " + inptopac + "%");

	$textcolor1.style.color = textinvertcolor($divbg);
	$textcolor2.style.color = textinvertcolor($divbg);
	//-----------------------------!-----------------------------\\
});

function createLog(text) {
	const lightstatement = document.createElement("li");

	lightstatement.textContent = text;

	ul.appendChild(lightstatement);
}
