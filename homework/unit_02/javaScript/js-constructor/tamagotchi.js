console.log('tamagotchi file is loaded');

//your class declaration here
class Tamagotchis {
  constructor(name, creatureType) {
    this.name = name;
    this.creatureType = creatureType;
    this.foodInTummy = 10;
    this.restedness = 10;
    this.health = 10;
  }
  cry() {
    this.foodInTummy -= 1;
    console.log(this.foodInTummy);
    console.log(this.name + ' is crying. WAAAAHHHHH!!!!!')
  }
  puke() {
    this.foodInTummy -= 1;
    console.log(this.foodInTummy + "BLAHHHHT")
  }
  yawn() {
    this.restedness -= 1;
    console.log(this.name + " has current restedness of: " + this.restedness)
  }
}

//create new Tamagotchis
var burnsTamagochi = new Tamagotchis("Burns", "fire");
var quinnTamagochi = new Tamagotchis("Quinn", "water");

//test out your Tamagotchies below via console.logs
burnsTamagochi.puke()
quinnTamagochi.yawn()
console.log(burnsTamagochi)
console.log(quinnTamagochi)
