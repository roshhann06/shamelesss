const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

const fadeElements = document.querySelectorAll(".fade-up");

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      observer.unobserve(entry.target); // animate once
    }
  });
}, { threshold: 0.2 }); // triggers when 20% is visible

fadeElements.forEach(el => observer.observe(el));