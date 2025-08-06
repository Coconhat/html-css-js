const projectTitles = document.querySelectorAll(".project-title");
const projectColors = ["#4285F4", "#EA4335", "#FBBC05", "#34A853"];

projectTitles.forEach((title) => {
  title.addEventListener("click", (e) => {
    const randomColor =
      projectColors[Math.floor(Math.random() * projectColors.length)];

    // Find the parent .col-sm-4.projects card
    const projectCard = title.closest(".col-sm-4.projects");

    if (projectCard) {
      projectCard.style.backgroundColor = randomColor;
    }
  });
});
