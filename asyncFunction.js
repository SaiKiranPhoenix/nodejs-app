// asyncFunction.js
const fetchData = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Data fetched successfully');
        }, 1000); // Simulate a 1-second delay
    });
};

module.exports = { fetchData };
