const obterEquipeAtual = (equipeInicial, numeroSemana) => {

    const qtdeEquipes = equipeInicial.length;

    const equipeSemanaInicial = equipeInicial.find(e => e.semanaInicial == numeroSemana);

    /**
     * Iniciar busca pela semana inicial de cada equipe
     */
    if (equipeSemanaInicial != null) {

        return equipeSemanaInicial;
    }

    for (const equipe of equipeInicial) {

        const isEquipeDaSemana = ((numeroSemana - equipe.semanaInicial) % qtdeEquipes) === 0;
    
        if (isEquipeDaSemana) {

            return equipe;
        }
    }

    return {};
}

const CURRENT_WEEK_NUMBER = new Date().getWeekNumber();

const EQUIPES_FILE = "./equipes.json";

fetch(EQUIPES_FILE, { method: 'GET' })
.then(response => response.json())
.then(response => {

    const equipeAtual = obterEquipeAtual(response.equipes, CURRENT_WEEK_NUMBER);

    const intervaloEscalaRef = document.getElementById('intervalo-semana');
    const listaEquipeRef = document.getElementById('lista-equipe');
    const numeroSemanaRef = document.getElementById('numero-semana');

    /**
     * Preenchendo numero semana
     */
    const spanNumeroSemana = document.createElement("span");
    spanNumeroSemana.innerText = CURRENT_WEEK_NUMBER;

    numeroSemanaRef.appendChild(spanNumeroSemana);

    /**
     * Preenchendo lista pessoas
     */
    for (const pessoa of equipeAtual.nomes) {

        const listItem = document.createElement("li");
        listItem.innerText = pessoa;

        listaEquipeRef.appendChild(listItem);
    }

})
.catch(err => console.error("Não foi possível obter as equipes", err));