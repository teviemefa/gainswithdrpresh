// Wait until the page fully loads
document.addEventListener('DOMContentLoaded', function() {
  // Select the button by its ID
  const startButton = document.getElementById('book-now');
  
  // Add a click event listener to the button
  startButton.addEventListener('click', function() {
    window.location.href = 'book-now.html';  // Redirects to book-now.html
  });
});

