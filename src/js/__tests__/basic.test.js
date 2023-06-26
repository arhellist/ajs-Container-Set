// eslint-disable-next-line import/no-named-as-default, import/no-named-as-default-member
import { Character } from '../caracter';
import Team from '../app';

test('Character type Throw', () => {
  expect(() => {
    // eslint-disable-next-line no-unused-vars
    const characters = new Character('Lask', 'AAA');
  }).toThrow();
});

test('addAll', () => {
  const playerOne = new Character('Grekc', 'Daemon');
  const playerTwo = new Character('Looser', 'Bowerman');
  const playerThree = new Character('Burkas', 'Bowerman');
  const team = new Team();
  team.addAll(playerOne, playerTwo, playerThree);
  expect(team.members).toContain(playerOne, playerTwo);
});

test('add', () => {
  const playerOne = new Character('Grekc', 'Daemon');
  const playerTwo = new Character('Looser', 'Bowerman');
  const team = new Team();
  team.add(playerOne);
  team.add(playerTwo);
  expect(team.members).toContain(playerOne, playerTwo);
});

test('add Throw', () => {
  expect(() => {
    const player = new Character('Grekc', 'Daemon');
    const team = new Team();
    team.add(player);
    team.add(player);
  }).toThrow('Этот игрок уже в команде');
});

test('toArray', () => {
  const playerOne = new Character('Grekc', 'Daemon');
  const playerTwo = new Character('Looser', 'Bowerman');
  const team = new Team();
  team.addAll(playerOne, playerTwo);
  expect(team.toArray()).toEqual([playerOne, playerTwo]);
});
