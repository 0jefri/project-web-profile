document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));

    target.scrollIntoView({
      behavior: 'smooth'
    });
  });
});

const whatsappNumber = "+6282288007705";

document.getElementById("whatsapp-button").addEventListener("click", function () {
  window.open(`https://wa.me/${6282288007705}`, '_blank');
});

const toggleButton = document.getElementById("toggle-button");
const layout = document.querySelector(".layout");

toggleButton.addEventListener("click", function () {
  layout.classList.toggle("dark-mode");

  if (layout.classList.contains("dark-mode")) {
    toggleButton.textContent = "Matikan Dark Mode";
  } else {
    toggleButton.textContent = "Aktifkan Dark Mode";
  }
});