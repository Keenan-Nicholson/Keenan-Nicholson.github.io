import "./style.css";
document.addEventListener("DOMContentLoaded", () => {
  const hiscoreImg = document.querySelector<HTMLImageElement>(".hiscore-img");

  if (!hiscoreImg) return;

  hiscoreImg.addEventListener("click", (e) => {
    e.preventDefault(); // prevent immediate navigation

    hiscoreImg.classList.add("spin");

    // After animation ends, remove the class and open the link
    hiscoreImg.addEventListener(
      "animationend",
      () => {
        hiscoreImg.classList.remove("spin");

        // Type assertion: parentElement is an HTMLAnchorElement
        const link = hiscoreImg.parentElement as HTMLAnchorElement | null;
        if (link) {
          window.open(link.href, "_blank");
        }
      },
      { once: true }
    );
  });
});
