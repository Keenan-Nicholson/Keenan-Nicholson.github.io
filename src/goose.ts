const BUCKET = "https://goosepics.keenans.cool";
const IMAGE_COUNT = 50;

export function initGooseGallery(): void {
  const pile = document.getElementById("pile");
  if (!pile) return;

  const images = Array.from({ length: IMAGE_COUNT }, (_, i) => `goose${i + 1}.jpeg`);
  shuffle(images);

  for (const name of images) {
    const img = document.createElement("img");
    img.src = `${BUCKET}/${name}`;
    img.loading = "lazy";
    img.style.maxWidth = `${40 + Math.random() * 20}%`;
    img.style.transform = `rotate(${Math.random() * 20 - 10}deg)`;
    img.style.marginTop = `${Math.random() * -20}px`;
    img.style.marginLeft = `${Math.random() * -20}px`;
    img.style.opacity = `${0.85 + Math.random() * 0.15}`;
    pile.appendChild(img);
  }
}

function shuffle<T>(arr: T[]): void {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}
