const obterEquipeAtual = (equipeInicial, numeroSemana) => {

    const qtdeEquipes = 3;

    const isSemanaInicial = equipeInicial.find(e => e.semanaInicial == numeroSemana);

    if (isSemanaInicial != null) {

        return isSemanaInicial.equipe;
    }

    for (const equipe of equipeInicial) {

        const isEquipeDaSemana = ((numeroSemana - equipe.semanaInicial) % qtdeEquipes) === 0;
    
        if (isEquipeDaSemana) {

            return equipe.equipe;
        }
    }
}

const numeroSemanaAtual = new Date().getWeekNumber();

const equipeAtual = obterEquipeAtual(equipes, numeroSemanaAtual);

const intervaloEscalaRef = document.getElementById('intervalo-semana');
const listaEquipeRef = document.getElementById('lista-equipe');
const numeroSemanaRef = document.getElementById('numero-semana');

/**
 * Preenchendo numero semana
 */
const spanNumeroSemana = document.createElement("span");
spanNumeroSemana.innerText = numeroSemanaAtual;

numeroSemanaRef.appendChild(spanNumeroSemana);

/**
 * Preenchendo lista pessoas
 */
for (const pessoa of equipeAtual.nomes) {

    const listItem = document.createElement("li");
    listItem.innerText = pessoa;

    listaEquipeRef.appendChild(listItem);
}