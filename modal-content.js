document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".learn-more-btn");
  const modalTitle = document.getElementById("projectModalLabel");
  const modalBody = document.getElementById("projectModalBody");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const title = button.getAttribute("data-title");
      const description = button.getAttribute("data-description");
      const link = button.getAttribute("data-link");

      // Update modal content
      modalTitle.textContent = title;
      modalBody.innerHTML = `
        <p>${description}</p>
        ${
          link
            ? `<a href="${link}" target="_blank" class="btn btn-primary mt-3">Visit Project</a>`
            : ""
        }
      `;
    });
  });
});
