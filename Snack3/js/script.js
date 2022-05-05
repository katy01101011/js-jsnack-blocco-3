// 3. Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà:
// nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare,
// le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0
// nelle proprietà: punti fatti e falli subiti.

// Creo la classe nuova per generare i team
class Team {
    constructor(nome, puntiFatti = 0, falliSubiti = 0) {
        this.nome = nome;
        this.puntiFatti = puntiFatti;
        this.falliSubiti = falliSubiti;
    }
    // Creo la funzione dei numeri random per i punti e i falli
    punti() {
        this.puntiFatti = Math.floor(Math.random() * 100);
        this.falliSubiti = Math.floor(Math.random() * 100);
    }
}

// Creo l'array vuoto
const footballTeams = [];
// Genero i team
const Juventus = new Team('Juventus');
const Milan = new Team('Milan');
const Inter = new Team('Inter');
const Bologna = new Team('Bologna FC');
const Parma = new Team('Parma')
console.log(Parma);
// Pusho i team nell'array
footballTeams.push(Juventus, Milan, Inter, Bologna, Parma);
// Aggiungo i punti e i falli random
footballTeams.forEach( element => {
    element.punti()
});

console.log(footballTeams);

