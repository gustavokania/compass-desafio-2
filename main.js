const section = document.getElementById("section-human");
const items = section.getElementsByClassName("divisao-principal");

for (const item of items) {
  const checkbox = item.getElementsByClassName("marcador1")[0];
  const line = item.getElementsByClassName("descricao-linha")[0];

  checkbox.addEventListener('change', evento => {
    if (evento.target.checked) {
      line.classList.add("marcador-ok");
    } else {
      line.classList.remove("marcador-ok");
    }
    });
}