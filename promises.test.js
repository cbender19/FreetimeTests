function fetchData(){
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('peanut butter');
    }, 500);
  });
}

function fetchDataError(){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('error');
    }, 500);
  });
}

test('the data is peanut butter', () =>{
  return fetchData().then(data =>{
    expect(data).toBe('peanut butter');
  });
});

test('the fetch fails with an error', () => {
  expect.assertions(1);
  return fetchDataError().catch(e => expect(e).toMatch('error'));
});
