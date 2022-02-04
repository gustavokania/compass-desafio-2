function checkboxMarcado(sectionName, markerName, lineDescription) {
  const section = document.getElementById(sectionName);
  const items = section.getElementsByClassName("divisao-principal");

  for (const item of items) {
    const checkbox = item.getElementsByClassName(markerName)[0];
    const line = item.getElementsByClassName(lineDescription)[0];

    checkbox.addEventListener('change', evento => {
      if (evento.target.checked) {
        line.classList.add("marcador-ok");
      } else {
        line.classList.remove("marcador-ok");
      }
    });
  }
}

checkboxMarcado("section-human", "marcador1", "descricao-linha");
checkboxMarcado("section-monster", "marcador2", "descricao-linha1");
