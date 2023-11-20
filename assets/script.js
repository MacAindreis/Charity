document.getElementById('donate').addEventListener('click', function() {
    document.getElementById('form-container').style.display = 'block';
   });
   
   document.getElementById('donation-form').addEventListener('submit', function(event) {
    event.preventDefault();
     
    // Process the form data here.
    console.log('Form submitted:', event.target);
   });