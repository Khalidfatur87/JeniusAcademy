// Ambil referensi ke form
const form = document.getElementById('registrationForm');

// Tambahkan event listener untuk form submission
form.addEventListener('submit', function(event) {
    // Menghentikan default behavior dari form submission
    event.preventDefault();

    // Ambil nilai dari input fields
    const username = document.querySelector('input[name="username"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const password = document.querySelector('input[name="password"]').value;
    const confirmPassword = document.querySelector('input[name="confirm_password"]').value;

    // Lakukan validasi
    if (username.trim() === '') {
        alert('Please enter your name.');
        return;
    }

    if (email.trim() === '') {
        alert('Please enter your email.');
        return;
    }

    if (!email.endsWith('@gmail.com')) {
        alert('Please enter a valid email address.');
        return;
    }

    if (password.trim() === '') {
        alert('Please enter your password.');
        return;
    }

    if (confirmPassword.trim() === '') {
        alert('Please repeat your password.');
        return;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return;
    }

    // Jika semua validasi berhasil, alihkan ke halaman berikutnya
    window.location.href = "loginpage.html";
});
