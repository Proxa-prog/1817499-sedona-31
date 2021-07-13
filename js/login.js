const loginLink = document.querySelector(".button_hotel_search");
const loginPopup = document.querySelector(".date_form");
const inputArrival = document.querySelector(".arrival");
const inputDeparture = document.querySelector(".departure");
const inputPeople = document.querySelector(".how_much_people");
let isStorageSupport = true;
let storage = "";
try {
	storage = localStorage.getItem("login");
} catch (err) {
	isStorageSupport = false;
}
loginLink.addEventListener("click", function(evt) {
	evt.preventDefault();
	loginPopup.classList.toggle("modal_show");
	if (storage) {
		inputArrival.value = storage;
		inputDeparture.focus();
	} else {
		inputArrival.focus();
	}
});
loginPopup.addEventListener("submit", function(evt) {
	if (!inputArrival.value || !inputDeparture.value) {
		evt.preventDefault();
	} else {
		if (isStorageSupport) {
			localStorage.setItem("login", inputArrival.value);
		}
	}
});
window.addEventListener("keydown", function(evt) {
	if (evt.keyCode === 27) {
		if (loginPopup.classList.contains("modal_show")) {
			evt.preventDefault();
			loginPopup.classList.remove("modal_show");
		}
	}
});