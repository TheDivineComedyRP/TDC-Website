/* The Divine Comedy — main script */
function showLauncherNote() {

  const button = document.getElementById("dl");
  const soon = document.getElementById("soon");

  button.addEventListener("click", () => {
    soon.hidden = false;
  });
};

showLauncherNote();