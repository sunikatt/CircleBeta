const WHATSAPP_NUMBER = "918309101725";

const betaForm = document.querySelector("#betaForm");

betaForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(betaForm);
  const name = formData.get("name");
  const phone = formData.get("phone");
  const area = formData.get("area");
  const activity = formData.get("activity");
  const intro = formData.get("intro");

  const message = [
    "Circle Hyderabad beta request",
    `Name: ${name}`,
    `Phone: ${phone}`,
    `Area: ${area}`,
    `Preferred activity: ${activity}`,
    `Intro: ${intro}`,
  ].join("\n");

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener,noreferrer");
});
