Crace = ''
class Personnage {
  pv = Math.floor(Math.random(10)*10)+1;
  pa = Math.floor(Math.random(10)*10)+1;
  pf = Math.floor(Math.random(10)*10)+1;
  px = 0;
  lvl = 1;
  constructor(nom) {
    this.nom = nom; }
  presentation() {
    if(this.pv>this.pa && this.pv>this.pf) {
      Crace = 'Le Guerrier ';
    } else if (this.pv>this.pa && this.pv<this.pf){
      Crace = 'Le Berserker ';
    } else {
      Crace = 'Le Paladin '; }
     console.log(Crace + `${this.nom} à rejoint la compétition.`);
} }
let P = new Personnage('Perceval')
let C = new Personnage('Castorno')
let L = new Personnage('Lucifer')
let J = new Personnage('Jtebeze')
var Entite = [P,C,L,J]

function Beginning (){
  for(let i = 0; i < Entite.length; i++){
    Entite[i].presentation()
} }
