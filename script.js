const botao = document.getElementById("botaoTema");
const icone = document.getElementById("iconeTema");

const temaSalvo = localStorage.getItem("tema");

if (temaSalvo === "escuro" ||
    (!temaSalvo && window.matchMedia("(prefers-color-scheme: dark)").matches)) {

    document.body.classList.add("escuro");

    icone.textContent = "☀";

} else {

    document.body.classList.remove("escuro");

    icone.textContent = "☾";
}

botao.addEventListener("click", function() {

    document.body.classList.toggle("escuro");

    const estaEscuro = document.body.classList.contains("escuro");

    if (estaEscuro) {

        icone.textContent = "☀";

        localStorage.setItem("tema", "escuro");

        botao.setAttribute("aria-label", "Ativar modo claro");

    } else {

        icone.textContent = "☾";

        localStorage.setItem("tema", "claro");

        botao.setAttribute("aria-label", "Ativar modo escuro");

    }

});

const anoAtual = new Date().getFullYear();

const rodape = document.querySelector(".footer p");

rodape.textContent =
    `© ${anoAtual} | Desenvolvido por Raissa Sinzervich ♡`;
