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
    console.log(this.foodInTummy + " BLAHHHHT")
  }
  yawn() {
    this.restedness -= 1;
    console.log(this.name + " has current restedness of: " + this.restedness)
  }
  start() {
    console.log(this.name);
    var current = this
    this.hungerTimer = setInterval(function() {
      current.cry();
    }, 6000);
    this.yawnTimer = setInterval(function() {
      current.yawn();
    }, 10000);
    this.sickTimer = setInterval(function() {
      current.puke();
    }, 20000);
  }
  stop(){
    clearInterval(this.hungerTimer);
    clearInterval(this.yawnTimer);
    clearInterval(this.sickTimer);
  }
}

//create new Tamagotchis
var burns = new Tamagotchis ('burns', 'water');
//test out your Tamagotchies below via console.logs
burns.start()
