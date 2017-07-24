console.log('tamagotchi file is loaded');

//your class declaration here
class Tamagotchis {
  constructor() {
    this.foodInTummy = 10;
    this.restedness = 10;
    this.health = 10;
  }
  cry() {
    this.foodInTummy -= 1;
    console.log(this.foodInTummy);
    console.log('WAAAAHHHHH!!!!!')
  }
}

//create new Tamagotchis
var burnsTamagochi = new Tamagotchis();
var quinnTamagochi = new Tamagotchis();

//test out your Tamagotchies below via console.logs
burnsTamagochi.cry();
quinnTamagochi.cry();
