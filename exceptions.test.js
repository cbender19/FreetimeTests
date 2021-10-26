function compileAndroidCode(){
  throw new Error('An Error occured')
}

test('compiling android goes as expected', () => {
  expect(() => compileAndroidCode()).toThrow();
  expect(() => compileAndroidCode()).toThrow(Error);
  expect(() => compileAndroidCode()).toThrow('An Error occured');
});
