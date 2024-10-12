// Untuk Home Page

// Togle class active untuk hamburger menu

const navbarNav = document.querySelector('.navbar-nav');

    // ketika hamburger menu di klik
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
}

// Togle class active untuk search form

const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');

document.querySelector('#search-button').onclick = (e) => {
    searchForm.classList.toggle('active');
    searchBox.focus();
    e.preventDefault();
}

// klik di luar element 
const hm = document.querySelector('#hamburger-menu');


// Untuk Review Page
const allStar = document.querySelectorAll('.rating .star')
const ratingValue = document.querySelector('.rating input')

allStar.forEach((item, idx)=> {
	item.addEventListener('click', function () {
		let click = 0
		ratingValue.value = idx + 1

		allStar.forEach(i=> {
			i.classList.replace('bxs-star', 'bx-star')
			i.classList.remove('active')
		})
		for(let i=0; i<allStar.length; i++) {
			if(i <= idx) {
				allStar[i].classList.replace('bx-star', 'bxs-star')
				allStar[i].classList.add('active')
			} else {
				allStar[i].style.setProperty('--i', click)
				click++
			}
		}
	})
})


// Untuk Registrasi Page


document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        validateForm();
    });

    function validateForm() {
        const username = document.querySelector("input[name='username']").value.trim();
        const email = document.querySelector("input[name='email']").value.trim();
        const password = document.querySelector("input[name='password']").value.trim();
        const repeatPassword = document.querySelector("input[name='repeat_password']").value.trim();

        if (username === "" || email === "" || password === "" || repeatPassword === "") {
            alert("All fields are required.");
            return;
        }

        if (password !== repeatPassword) {
            alert("Passwords do not match.");
            return;
        }

        // Additional validation logic can be added here

        // If all validations pass, you can submit the form
        form.submit();
    }
});

// Untuk Login Page

document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
        
        // Retrieve input values
        const username = document.querySelector('input[name="username"]').value;
        const password = document.querySelector('input[name="password"]').value;

        // Validation (example: check if fields are not empty)
        if (username.trim() === '' || password.trim() === '') {
            alert('Please fill in all fields.');
            return;
        }

    });

});

// Untuk pindah ke page berikut nya pada Login page

function redirectToNextPage() {
    // Ganti URL halaman berikutnya dengan yang diinginkan
    window.location.href ="subscribtion.html";
 }


document.getElementById("loginButton").onclick = function() {
    redirectToNextPage();
};



