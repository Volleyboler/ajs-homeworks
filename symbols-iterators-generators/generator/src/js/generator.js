import Character from './Character.js';

class Team {
  constructor() {
    this.members = [];
  }

  add(member) {
    if (!(member instanceof Character)) {
      throw new Error('Могут быть добавлены только объекты класса Character .');
    }
    this.members.push(member);
  }

  *[Symbol.iterator]() {
    for (const member of this.members) {
      yield member;
    }
  }
}

export default Team;