// Function to create a promise that resolves after a random delay
function createPromise(promiseNumber) {
    return new Promise((resolve) => {
        const delay = Math.floor(Math.random() * 3) + 1; // Random delay between 1 and 3 seconds
        setTimeout(() => {
            resolve({ promise: `Promise ${promiseNumber}`, time: delay });
        }, delay * 1000); // Convert seconds to milliseconds
    });
}

// Function to update the table with results
function updateTable(results) {
    const output = document.getElementById('output');
    output.innerHTML = ''; // Clear the loading row

    let totalTime = 0;
    results.forEach(result => {
        const row = document.createElement('tr');
        const promiseCell = document.createElement('td');
        const timeCell = document.createElement('td');
        promiseCell.textContent = result.promise;
        timeCell.textContent = result.time.toFixed(3); // Format to 3 decimal places
        row.appendChild(promiseCell);
        row.appendChild(timeCell);
        output.appendChild(row);
        totalTime = Math.max(totalTime, result.time); // Track the maximum time
    });

    // Add total row
    const totalRow = document.createElement('tr');
    const totalCell = document.createElement('td');
    const totalTimeCell = document.createElement('td');
    totalCell.textContent = 'Total';
    totalTimeCell.textContent = totalTime.toFixed(3); // Format to 3 decimal places
    totalRow.appendChild(totalCell);
    totalRow.appendChild(totalTimeCell);
    output.appendChild(totalRow);
}

// Create and resolve promises
Promise.all([
    createPromise(1),
    createPromise(2),
    createPromise(3)
]).then(updateTable);