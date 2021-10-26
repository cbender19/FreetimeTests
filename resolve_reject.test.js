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
  return expect(fetchData()).resolves.toBe('peanut butter');
});

test('the fetch fails with an error', () =>{
  return expect(fetchDataError()).rejects.toMatch('error');
});
