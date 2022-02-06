const dataNascimento = document.querySelector("#dataNascimento");

dataNascimento.addEventListener("blur" , (evento) => {
    validacaoNascimento(evento.target);
})

function validacaoNascimento(input) {
    const dataInformada = new Date(input.value);
    const dataAtual = new Date();
    let message = "";

    if (dataInformada > dataAtual) {
        message = "I just know you are not a time traveler, please inform a date of birth that is not in the future dood!";
    }

    input.setCustomValidity(message);
}