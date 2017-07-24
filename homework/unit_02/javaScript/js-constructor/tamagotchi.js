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
}

//create new Tamagotchis
var burnsTamagochi = new Tamagotchis("Burns", "fire");
var quinnTamagochi = new Tamagotchis("Quinn", "water");

//test out your Tamagotchies below via console.logs
burnsTamagochi.cry();
quinnTamagochi.cry();
