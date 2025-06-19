document.addEventListener("DOMContentLoaded", () => {
    // Modal Elements
    const loginModal = document.getElementById("loginModal");
    const registerModal = document.getElementById("registerModal");
  
    const loginBtn = document.getElementById("loginBtn");
    const registerBtn = document.getElementById("registerBtn");
    const mainLoginBtn = document.getElementById("mainLoginBtn");
    const mainRegisterBtn = document.getElementById("mainRegisterBtn");
  
    const closeButtons = document.querySelectorAll(".close");
  
    // Mobile nav
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");
  
    // Modals
    function showModal(modal) {
      modal.style.display = "block";
    }
  
    function hideModal(modal) {
      modal.style.display = "none";
    }
  
    loginBtn.addEventListener("click", e => {
      e.preventDefault();
      showModal(loginModal);
    });
  
    registerBtn.addEventListener("click", e => {
      e.preventDefault();
      showModal(registerModal);
    });
  
    mainLoginBtn.addEventListener("click", () => showModal(loginModal));
    mainRegisterBtn.addEventListener("click", () => showModal(registerModal));
  
    closeButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        const modalId = btn.getAttribute("data-modal");
        hideModal(document.getElementById(modalId));
      });
    });
  
    window.addEventListener("click", e => {
      if (e.target === loginModal) hideModal(loginModal);
      if (e.target === registerModal) hideModal(registerModal);
    });
  
    // Mobile toggle
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  
    // Date/Time Display
    const dateTimeDisplay = document.getElementById("dateTimeDisplay");
  
    function updateDateTime() {
      const now = new Date();
      const date = now.toLocaleDateString(undefined, {
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
      });
      const time = now.toLocaleTimeString();
      dateTimeDisplay.textContent = `📅 ${date} | 🕒 ${time}`;
    }
  
    updateDateTime();
    setInterval(updateDateTime, 1000);
  });
  