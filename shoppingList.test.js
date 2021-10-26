const shoppingList =[
  'turkey',
  'cheese',
  'bread',
  'paper towels',
  'apples'
];

test("the shopping list has apples on it", () => {
  expect(shoppingList).toContain('apples');
});
