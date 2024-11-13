// Função para exibir informações sobre o impacto do clima
function exibirClima() {
    const climaInfo = document.getElementById("climaInfo");
    climaInfo.innerText = "A temperatura, umidade e ventos são fatores determinantes nas queimadas. Em períodos de seca, a baixa umidade e ventos intensos aumentam o risco de propagação.";
}

function toggleSection(sectionId) {
    const section = document.getElementById(sectionId);
    const arrow = section.previousElementSibling.querySelector('.seta');

    // Alterna a classe entre 'conteudo-oculto' e 'conteudo-visivel'
    if (section.classList.contains('conteudo-oculto')) {
        section.classList.remove('conteudo-oculto');
        section.classList.add('conteudo-visivel');
        arrow.innerHTML = '&#9652;'; // seta para cima
    } else {
        section.classList.remove('conteudo-visivel');
        section.classList.add('conteudo-oculto');
        arrow.innerHTML = '&#9662;'; // seta para baixo
    }
}
