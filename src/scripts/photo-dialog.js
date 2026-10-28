const photoDialog = document.querySelector("#pickup-photo-dialog");
async function closePhoto() {
  if (!photoDialog.open || photoDialog.classList.contains("is-closing")) return;
  photoDialog.classList.add("is-closing");
  await Promise.allSettled(
    photoDialog.getAnimations().map((animation) => animation.finished),
  );
  photoDialog.close();
  photoDialog.classList.remove("is-closing");
}
document.querySelector(".pickup-photo-open").addEventListener("click", () => {
  photoDialog.showModal();
});
document
  .querySelector(".photo-dialog-close")
  .addEventListener("click", closePhoto);
photoDialog.addEventListener("cancel", (event) => {
  event.preventDefault();
  closePhoto();
});
photoDialog.addEventListener("click", (event) => {
  if (event.target !== photoDialog) return;
  const bounds = photoDialog.getBoundingClientRect();
  if (
    event.clientX < bounds.left ||
    event.clientX > bounds.right ||
    event.clientY < bounds.top ||
    event.clientY > bounds.bottom
  )
    closePhoto();
});
