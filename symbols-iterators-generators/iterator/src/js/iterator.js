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

    [Symbol.iterator]() {
        let currentIndex = 0;

        return {
        next: () => {
            if (currentIndex < this.members.length) {
            const value = this.members[currentIndex];
            currentIndex++;
            return { done: false, value };
            } else {
            return { done: true };
            }
        },
        };
    }
}

export default Team;