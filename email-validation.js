document.addEventListener("DOMContentLoaded", () => {
  const getInTouch = document.querySelector(".getInTouch");
  const expand = document.getElementById("contact-expand");
  const expandWrapper = document.getElementById("contact-expand-wrapper");
  const closeBtn = document.getElementById("close-form");
  const form = document.getElementById("contact-form");
  const status = document.getElementById("status");
  const emailInput = document.getElementById("email");

  const footerHeading = document.getElementById("footer-heading");
  const footerSubtext = document.getElementById("footer-subtext");

  const originalHeading = footerHeading.textContent;
  const originalSubtext = footerSubtext.textContent;

  function openForm() {
    expand.classList.add("open");
    expand.setAttribute("aria-hidden", "false");
    getInTouch.textContent = "Hi!";

    footerHeading.textContent = "Great, you made it to the form!";
    footerSubtext.textContent = "I can't wait to hear from you!";

    setTimeout(() => {
      expandWrapper.scrollIntoView({ behavior: "smooth", block: "end" });
    }, 100);

    setTimeout(() => {
      document.getElementById("name").focus();
    }, 400);
  }

  function closeForm() {
    expand.classList.remove("open");
    expand.setAttribute("aria-hidden", "true");
    getInTouch.textContent = "Get in touch.";

    footerHeading.textContent = originalHeading;
    footerSubtext.textContent = originalSubtext;

    status.style.display = "none";
  }

  getInTouch.addEventListener("click", () => {
    expand.classList.contains("open") ? closeForm() : openForm();
  });

  closeBtn.addEventListener("click", closeForm);

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const emailValue = emailInput.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(emailValue) || !emailValue.endsWith(".com")) {
      status.style.display = "block";
      status.style.color = "red";
      status.textContent = "Please enter a valid email that ends with '.com'";
      return;
    }

    status.style.color = "green";
    status.style.display = "block";
    status.textContent = "Thanks! Message received (mocked, no backend).";

    alert("Message sent successfully!");

    form.reset();

    setTimeout(() => {
      status.style.display = "none";
      closeForm();
    }, 1000);
  });

  //smooth scroll to projects section
  const arrow = document.getElementById("scroll-down");
  const projects = document.getElementById("projects");
  if (arrow && projects) {
    arrow.addEventListener("click", () => {
      projects.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }
});
