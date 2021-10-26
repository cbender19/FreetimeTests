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

test('the data is peanut butter', async () => {
  const data = await fetchData();
  expect(data).toBe('peanut butter');
});

test('the fetch fails with an error', async () => {
  expect.assertions(1);
  try{
    await fetchDataError();
  }catch (e){
    expect(e).toMatch('error');
  }
});

test('the data is peanut butter', async () => {
  await expect(fetchData()).resolves.toBe('peanut butter');
});

test('the fetch fails with an error', async () => {
  await expect(fetchDataError()).rejects.toMatch('error');
});
