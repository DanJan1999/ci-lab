const getGreeting = require('./project');
const displayWinner = require('./project');

test('can create a basic greeting', () => {
  expect(getGreeting('Sam')).toBe("Hi Sam");
});

test('Byu won', () => {
  expect(displayWinner('BYU', 'Utah')).toBe("BYU beat Utah!")
});