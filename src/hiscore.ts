export function initHiscore(): void {
  const img = document.querySelector<HTMLImageElement>(".hiscore-img");
  if (!img) return;

  const link = img.closest<HTMLAnchorElement>("a");
  if (!link) return;

  img.addEventListener("click", (e) => {
    e.preventDefault();

    const spin = img.animate(
      [{ transform: "rotate(0deg)" }, { transform: "rotate(360deg)" }],
      { duration: 500, easing: "ease-in-out" },
    );

    spin.finished.then(() => {
      window.open(link.href, "_blank");
    });
  });
}
