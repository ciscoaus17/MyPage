
// Handle login form submission
document.getElementById('login-form').addEventListener('submit', function(e) {
	e.preventDefault(); // Prevent default form submission

	const username = document.getElementById('username').value; // Get the username value
	const password = document.getElementById('password').value; // Get the password value

	// Fixed credentials
	const validUsername = "adzlan";
	const validPassword = "sali123";

	// Check if entered credentials match
	if (username === validUsername && password === validPassword) {
	// Successfully logged in
	alert('Login successful!');
	// Redirect to welcome.html
	window.location.href = 'welcome.html';
	} else {
	// Display error message
	document.getElementById('error-message').innerText = 'Invalid username or password.';
	}
});
