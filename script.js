// Booking form functionality
document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById('ambulanceForm');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();

      const name = document.getElementById('name').value.trim();
      const phone = document.getElementById('phone').value.trim();
      const location = document.getElementById('location').value.trim();
      const emergency = document.getElementById('emergency').value;

      if (!name || !phone || !location || !emergency) {
        alert("⚠️ Please fill in all fields!");
        return;
      }

      // Add to table
      const tableBody = document.querySelector("#recordTable tbody");
      const newRow = tableBody.insertRow();
      newRow.insertCell(0).innerText = name;
      newRow.insertCell(1).innerText = phone;
      newRow.insertCell(2).innerText = location;
      newRow.insertCell(3).innerText = emergency;

      alert(`🚑 Ambulance booked successfully for ${name}!`);
      form.reset();
    });
  }
});
// Handle Sign Up
document.addEventListener("DOMContentLoaded", function() {
  const signupForm = document.getElementById("signupForm");
  const signinForm = document.getElementById("signinForm");

  // Sign Up logic
  if (signupForm) {
    signupForm.addEventListener("submit", function(e) {
      e.preventDefault();

      const name = document.getElementById("signupName").value.trim();
      const email = document.getElementById("signupEmail").value.trim();
      const password = document.getElementById("signupPassword").value.trim();

      if (!name || !email || !password) {
        alert("⚠️ Please fill in all fields!");
        return;
      }

      // Save user info
      const user = { name, email, password };
      localStorage.setItem("ambulanceUser", JSON.stringify(user));

      alert("✅ Account created successfully! You can now sign in.");
      window.location.href = "signin.html";
    });
  }

  // Sign In logic
  if (signinForm) {
    signinForm.addEventListener("submit", function(e) {
      e.preventDefault();

      const email = document.getElementById("signinEmail").value.trim();
      const password = document.getElementById("signinPassword").value.trim();

      const savedUser = JSON.parse(localStorage.getItem("ambulanceUser"));

      if (savedUser && email === savedUser.email && password === savedUser.password) {
        alert(`👋 Welcome back, ${savedUser.name}!`);
        localStorage.setItem("isLoggedIn", "true");
        window.location.href = "booking.html";
      } else {
        alert("❌ Invalid email or password. Please try again.");
      }
    });
  }
});
