export class Character {
  typeValue;
  constructor(name, type, health = 100, level = 1, attack = 0, defence = 0) {
    this.name = name;
    this.type = type;
    this.health = health;
    this.level = level;
    this.attack = attack;
    this.defence = defence;
  }

  set type(type) {
    const typeUnit = ['Bowerman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
    if (!typeUnit.includes(type)) {
      throw new Error('Недопустимый тип юнита');
    }
    this.typeValue = type;
  }

}
