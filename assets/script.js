document.addEventListener("DOMContentLoaded", function() {
    // Get the modal
    var modal = document.getElementById("donationModal");
  
    // Get the buttons that open the modal
    var btns = document.querySelectorAll(".donateButton");
  
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
  
    // Open the modal when any donate button is clicked
    btns.forEach(function(btn) {
      btn.onclick = function() {
        modal.style.display = "block";
      }
    });
  
    // Close the modal when the user clicks on <span> (x)
    span.onclick = function() {
      modal.style.display = "none";
    }
  
    // Close the modal when the user clicks anywhere outside of it
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  
    // Get the donation form
    var donationForm = document.getElementById("donationForm");
  
    // Event listener for the form submission
    donationForm.addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent the form from submitting
  
      // Your alert message
      alert("Thank you for your donation!");
  
      // Close the modal after showing the alert
      modal.style.display = "none";
  
      // Additional code for handling form data can go here
    });
  });
  