const $menu = document.querySelector("#menu");
const $form = document.querySelector("form");
const $MCS = document.querySelector("#menu-code-status");
const $inpRg = document.querySelector("#inpRg")
const $MSS = document.querySelector("#menu-span-status");
const $btn = document.querySelector("#light");
const $glowstOff = document.querySelector("#glowstone");
const img = document.querySelector("img");

let etat = false;

$btn.addEventListener("click", (e) => {
	menu.showModal();
});

$inpRg.addEventListener("change", (e) =>{
        
})

$form.addEventListener("submit", (e) => {
	if (etat == false) {
		$MCS.textContent = "Off";
		$MSS.textContent = "Off";
		img.src = "assets/glowstone-on.webp";
		document.body.classList.remove("light-off");
		document.body.classList.add("light-on");
		etat = true;
	} else if (etat == true) {
		$MCS.textContent = "On";
		$MSS.textContent = "On";
		img.src = "assets/glowstone-off.webp";
		document.body.classList.remove("light-on");
		document.body.classList.add("light-off");
		etat = false;
	}
});
