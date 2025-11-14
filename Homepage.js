// Intersection Observer for scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in");
    }
  });
}, observerOptions);

// Observe all boxes
document.querySelectorAll(".box").forEach((box) => {
  observer.observe(box);
});

// Smooth scrolling for navigation
document.querySelectorAll("nav a, .nav-elements li").forEach((link) => {
  link.addEventListener("click", (e) => {
    // Add click animation
    link.style.transform = "scale(0.95)";
    setTimeout(() => {
      link.style.transform = "scale(1)";
    }, 150);
  });
});

// Add hover effects to buttons
document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("mouseenter", () => {
    button.style.transform = "translateY(-2px) scale(1.02)";
  });

  button.addEventListener("mouseleave", () => {
    button.style.transform = "translateY(0) scale(1)";
  });
});

// Parallax effect for hero section
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  const heroSection = document.querySelector(".hero-section");
  const speed = scrolled * 0.5;
  heroSection.style.transform = `translateY(${speed}px)`;
});

// Add loading animation
window.addEventListener("load", () => {
  document.body.style.opacity = "0";
  setTimeout(() => {
    document.body.style.transition = "opacity 0.5s ease";
    document.body.style.opacity = "1";
  }, 100);
});
