// asyncFunction.test.js
const { fetchData } = require('../asyncFunction.js'); // Adjust the path if necessary

test('fetchData returns the correct data', async () => {
    const data = await fetchData();
    expect(data).toBe('Data fetched successfully');
});

test('fetchData works within the time limit', async () => {
    jest.setTimeout(2000); // Set a timeout limit for the test
    const data = await fetchData();
    expect(data).toBe('Data fetched successfully');
});
