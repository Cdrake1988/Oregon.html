document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    if (form) {
      const email = document.getElementById('email');
      const confirmEmail = document.getElementById('confirmEmail');
  
      function validateEmails() {
        if (email.value !== confirmEmail.value) {
          confirmEmail.setCustomValidity("Email addresses don't match");
        } else {
          confirmEmail.setCustomValidity('');
        }
      }
  
      email.addEventListener('change', validateEmails);
      confirmEmail.addEventListener('keyup', validateEmails);
  
      form.addEventListener('submit', function(e) {
        e.preventDefault();
        // Here you would typically send the form data to a server
        alert('Form submitted successfully!');
      });
    }
   
  });
  function toggleMenu() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }