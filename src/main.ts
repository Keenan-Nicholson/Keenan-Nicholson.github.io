import "./style.css";
document.addEventListener("DOMContentLoaded", () => {
  const hiscoreImg = document.querySelector<HTMLImageElement>(".hiscore-img");

  if (!hiscoreImg) return;

  hiscoreImg.addEventListener("click", (e) => {
    e.preventDefault();

    const link = hiscoreImg.parentElement as HTMLAnchorElement | null;
    if (!link) return;

    // Add spin + scale animation
    hiscoreImg.classList.add("spin");

    // Remove class after animation duration (hard-coded 500ms)
    setTimeout(() => {
      hiscoreImg.classList.remove("spin");

      // Navigate to link in new tab — works on iOS Safari
      window.open(link.href, "_blank");
    }, 200); // match CSS animation duration
  });
});
