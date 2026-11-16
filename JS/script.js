// Aplica o tema (claro ou escuro) na página e ajusta o texto do botão
function aplicarTema(tema) {
    var botao = document.getElementById("botao-tema");

    if (tema === "escuro") {
        document.body.classList.add("escuro");
        botao.innerHTML = "Modo claro";
    } else {
        document.body.classList.remove("escuro");
        botao.innerHTML = "Modo escuro";
    }
}

// Troca entre modo claro e modo escuro e guarda a escolha no navegador
function trocarTema() {
    var novoTema = "escuro";

    if (document.body.classList.contains("escuro")) {
        novoTema = "claro";
    }

    aplicarTema(novoTema);
    localStorage.setItem("tema", novoTema);
}

// Ao abrir qualquer página, usa o tema que foi salvo (se não houver, fica claro)
aplicarTema(localStorage.getItem("tema") || "claro");

// Coloca o ano atual no rodapé
document.getElementById("ano").innerHTML = new Date().getFullYear();
