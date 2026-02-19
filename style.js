document.addEventListener("DOMContentLoaded", () => {

  const button = document.getElementById("more");
  const container = document.querySelector(".formations-container");

  // Sécurité
  if (!button || !container) return;

  button.addEventListener("click", () => {

    const formations = [
      "React JS",
      "Cybersécurité",
      "Intelligence Artificielle"
    ];

    formations.forEach(formation => {
      const article = document.createElement("article");s
      article.className = "card";

      article.innerHTML = `
        <h3>${formation}</h3>
        <img src="img/default.jpg" alt="Formation ${formation}" loading="lazy">
        <p>Formation professionnelle en ${formation}.</p>
      `;

      container.appendChild(article);
    });

    // Désactiver le bouton après clic
    button.disabled = true;
    button.textContent = "Formations chargées";
  });

});