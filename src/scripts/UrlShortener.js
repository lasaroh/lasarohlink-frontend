document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("url");
  const shortenedUrl = document.getElementById("shortenedUrl");
  const divUrlShortened = document.getElementById("divUrlShortened");
  const copyButton = document.getElementById("copyButton");
  const tooltip = document.getElementById("tooltip");

  // Add a listener to the form's "submit" event
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    divUrlShortened.classList.remove("invisible");
    const data = new FormData(e.target);

    try {
      const response = await fetch(e.target.action, {
        method: "POST",
        body: data,
      });

      const result = await response.text();
      shortenedUrl.value = result;
    } catch (error) {
      shortenedUrl.value = error;
    }
  });

  // Add a "click" event listener to the copy button
  copyButton.addEventListener("click", () => {
    const buttonRect = copyButton.getBoundingClientRect();

    navigator.clipboard.writeText(shortenedUrl.value).then(() => {
      tooltip.style.position = "absolute";
      tooltip.style.top = `${
        buttonRect.top + window.scrollY + buttonRect.height + 10
      }px`;
      tooltip.style.left = `${
        buttonRect.left +
        window.scrollX +
        (buttonRect.width - tooltip.offsetWidth) / 2
      }px`;

      tooltip.classList.remove("opacity-0");
      tooltip.classList.add("opacity-100");

      setTimeout(() => {
        tooltip.classList.remove("opacity-100");
        tooltip.classList.add("opacity-0");
      }, 1500);
    });
  });
});