import "./style.css";
document.addEventListener("DOMContentLoaded", () => {
  const hiscoreImg = document.querySelector<HTMLImageElement>(".hiscore-img");

  if (!hiscoreImg) return;

  hiscoreImg.addEventListener("click", (e) => {
    e.preventDefault();

    const link = hiscoreImg.parentElement as HTMLAnchorElement | null;
    if (!link) return;

    hiscoreImg.classList.add("spin");

    setTimeout(() => {
      hiscoreImg.classList.remove("spin");

      window.open(link.href, "_blank");
    }, 500);
  });
});
