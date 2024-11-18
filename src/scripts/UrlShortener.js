document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("url");
  const shortenedUrl = document.getElementById("shortenedUrl");
  const divUrlShortened = document.getElementById("divUrlShortened")

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    
    divUrlShortened.classList.remove('invisible');
    
    const data = new FormData(e.target);

    try {
      const response = await fetch(e.target.action, {
        method: "POST",
        body: data,
      });

      const result = await response.text();

      if (response.ok) {
        shortenedUrl.value = result;
      } else {
        shortenedUrl.value = result;
      }
    } catch (error) {
      shortenedUrl.value = error;
    }
  });
});

const copyButton = document.getElementById("copyButton");
copyButton.addEventListener("click", () => {
  const shortenedUrl = document.getElementById("shortenedUrl");
  const tooltip = document.getElementById("tooltip");
  const buttonRect = copyButton.getBoundingClientRect();

  // Copiar texto al portapapeles
  navigator.clipboard.writeText(shortenedUrl.value).then(() => {
    // Posicionar el tooltip 10px debajo del botón
    tooltip.style.position = "absolute";
    tooltip.style.top = `${
      buttonRect.top + window.scrollY + buttonRect.height + 10
    }px`; // 10px por debajo del botón
    tooltip.style.left = `${
      buttonRect.left +
      window.scrollX +
      (buttonRect.width - tooltip.offsetWidth) / 2
    }px`; // Centrado horizontalmente

    // Mostrar el tooltip
    tooltip.classList.remove("opacity-0");
    tooltip.classList.add("opacity-100");

    // Ocultar después de 1.5 segundos
    setTimeout(() => {
      tooltip.classList.remove("opacity-100");
      tooltip.classList.add("opacity-0");
    }, 1500);
  });
});
