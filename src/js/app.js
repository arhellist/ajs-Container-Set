export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(player) {
    if (this.members.has(player)) {
      throw new Error('Этот игрок уже в команде');
    } else {
      this.members.add(player);
    }
  }

  addAll(...player) {
    player.forEach((item) => this.members.add(item));
  }

  toArray() {
    return [...this.members];
  }
}
