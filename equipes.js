class Equipes {
    
    static equipe1 = {
        id: 1, 
        nomes: [
            'Carlos Escalona', 'Felipe Basso'
        ]
    };

    static equipe2 = {
        id: 2, 
        nomes: [
            'Marianna Belniok', 'Débora Maciel'
        ]
    };

    static equipe3 = {
        id: 3, 
        nomes: [
            'Gabriel Seima', 'Isabel Sleigman', 'Jhonathan Rowinski'
        ]
    };
}

const equipes = [
    
    {
        semanaInicial: 1,
        equipe: Equipes.equipe1
    },
    {
        semanaInicial: 2,
        equipe: Equipes.equipe2
    },
    {
        semanaInicial: 3,
        equipe: Equipes.equipe3
    }
];