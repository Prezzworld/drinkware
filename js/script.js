// const bootstrap = require("bootstrap");

AOS.init();

const navToggler = document.getElementById("navToggler");
const icon = document.querySelector(".fa-bars");
const navLinks = document.querySelectorAll(".nav-link");

navToggler.addEventListener("click", () => {
	if (icon.classList.contains("fa-bars")) {
		icon.classList.remove("fa-bars");
		icon.classList.add("fa-times");
	} else {
		icon.classList.remove("fa-times");
		icon.classList.add("fa-bars");
	}

	navLinks.forEach((link) => {
		link.addEventListener("click", () => {
			const navbarCollapse = document.querySelector(".navbar-collapse.show");
			if (navbarCollapse) {
				new bootstrap.Collapse(navbarCollapse, { toggle: true });
				icon.classList.remove("fa-times");
				icon.classList.add("fa-bars");
			}
		});
	});
});
