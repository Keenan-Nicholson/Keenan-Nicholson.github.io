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

const BUCKET = "https://goosepics.keenans.cool";
const pile = document.getElementById("pile");

const gooseImages = Array.from({ length: 50 }, (_, i) => `goose${i + 1}.jpeg`);

if (pile) {
  gooseImages.sort(() => Math.random() - 0.5);

  gooseImages.forEach((name) => {
    const img = document.createElement("img");
    img.src = `${BUCKET}/${name}`;
    img.loading = "lazy";

    // random width for slight chaos
    img.style.maxWidth = `${40 + Math.random() * 20}%`;

    // random small rotation
    img.style.transform = `rotate(${Math.random() * 20 - 10}deg)`; // -10° to +10°

    // slight overlap
    img.style.marginTop = `${Math.random() * -20}px`; // negative margin up to 20px
    img.style.marginLeft = `${Math.random() * -20}px`;

    // slight opacity variation
    img.style.opacity = `${0.85 + Math.random() * 0.15}`;

    pile.appendChild(img);
  });
}
