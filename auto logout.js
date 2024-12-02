   <script>
        let timeout;

        // Function to log out the user
        function logout() {
            alert("You have been logged out due to inactivity.");
            // Here you would typically redirect to a logout script or homepage
            window.location.href = 'logout.php'; // Change to your logout URL
        }

        // Function to reset the idle timer
        function resetTimer() {
            clearTimeout(timeout);
            timeout = setTimeout(logout, 60000); // 1 minute = 60000 milliseconds
        }

        // Add event listeners to reset the timer on user activity
        window.onload = function() {
            // Reset timer on various events
            document.onmousemove = resetTimer;
            document.onkeypress = resetTimer;
            document.onclick = resetTimer; // Include mouse clicks
            document.onscroll = resetTimer; // Include scroll events
            resetTimer(); // Initialize the timer when the page loads
        };
    </script>