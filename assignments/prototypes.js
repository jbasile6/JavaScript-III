/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing
   several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.
    Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/


//Inheritance order: GameObject --> Character Stats --> Humanoids
  
/*
  === GameObject ===
  * createdAt
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method -> returns the string: 'Object was removed from the game.'
*/

//GameObject constructor
function GameObject(gameObjProps) {
  this.createdAt = gameObjProps.createdAt;
  this.dimensions = gameObjProps.dimensions;
}
//GameObject method
GameObject.prototype.destroy = function() {
  return `${this.name} was removed from the game.`
}

/*
  === CharacterStats ===
  * healthPoints
  * name
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/
//CharacterStats constructor
function CharacterStats(characterStatsProps) {
  this.healthPoints= characterStatsProps.healthPoints;
  this.name = characterStatsProps.name;
  GameObject.call(this, characterStatsProps);
}

CharacterStats.prototype = Object.create(GameObject.prototype);


//CharacterStats Methods- must be below Object.create/inheritance
CharacterStats.prototype.takeDamage = function () {
  return `${this.name} took damage.`
}

CharacterStats.prototype.die = function() {
  if(this.healthPoints <= 0) {
    return console.log(this.destroy());
  }
}



/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/

//humanoid constructor
function Humanoid(humanoidProps) {
  this.team = humanoidProps.team;
  this.weapons = humanoidProps.weapons;
  this.language = humanoidProps.language;
  CharacterStats.call(this, humanoidProps);
}

//charStats has already inheritted GameObjects
Humanoid.prototype = Object.create(CharacterStats.prototype);

//humanoid Methods--below inheritance
Humanoid.prototype.greet = function() {
  return `${this.name} offers a getting in ${this.language}.`;
}
//added method to humanoids, if health <= 0, destroy function is logged in console.

 
/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/


  // Stretch task: 
  // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  

  // * Give the Hero and Villains different methods that could be used to remove health points from objects
  // which could result in destruction if health gets to 0 or drops below 0;

  // * Create two new objects, one a villain and one a hero and fight it out with methods!


// Test you work by un-commenting these 3 objects and the list of console logs below:


  const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
  });

  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });

  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });

  //villain object
  const villain = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 10,
      width: 15,
      height: 20,
    },
    healthPoints: 100,
    name: 'JS III',
    team: 'E.V.I.L. - Every Villian Is Lemons',
    weapons: [
      'Confusion Staff'
    ],
    language: 'JavaScript'
  });

  //hero object
  const hero = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 7,
      width: 12,
      height: 18,
    },
    healthPoints: 75,
    name: 'James',
    team: 'Lambda Web17',
    weapons: [
      'Training Kit',
      'Google',
      'Web17HelpChannel'
    ],
    language: 'English'
  });

//villain constructor
function Villain(villainProps) {
  Humanoid.call(this, villainProps);
}

Villain.prototype = Object.create(Humanoid.prototype);

//villain methods---inheritance^^^^
Villain.prototype.confustionAttack = function() {
  hero.healthPoints -= 30;
  return `The Villain, ${this.name} attacks with ${this.weapons[0]}!`;
}

//hero constructor
function Hero(heroProps) {
  Humanoid.call(this, heroProps);
}

Hero.prototype = Object.create(Humanoid.prototype);

//hero methods---inheritance^^^^
Hero.prototype.learnAttack = function() {
  villain.healthPoints -= 24;
  return `The Hero, ${this.name} attacks with ${this.weapons[0]}!`
}




  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.healthPoints); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.team); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
  console.log(villain.weapons);
  console.log(hero.weapons);

  // Stretch task: 
  // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
  // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villain and one a hero and fight it out with methods!