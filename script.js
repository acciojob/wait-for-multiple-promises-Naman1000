//your JS code here. If required.
const output = document.getElementById('output');
    const startBtn = document.getElementById('start');

    function createPromise(index) {
      const time = (Math.random() * 2 + 1); // 1 to 3 seconds
      return new Promise(resolve => {
        setTimeout(() => {
          resolve({ index, time });
        }, time * 1000);
      });
    }

    startBtn.addEventListener('click', () => {
      // ✅ Show default loading row
      output.innerHTML = `<tr><td colspan="2">Loading...</td></tr>`;

      const startTime = performance.now();

      // ✅ Create and start 3 promises
      const promises = [1, 2, 3].map(i => createPromise(i));

      // ✅ Use Promise.all to wait for all
      Promise.all(promises).then(results => {
        const endTime = performance.now();
        const totalTime = ((endTime - startTime) / 1000).toFixed(3);

        // ✅ Clear loading message
        output.innerHTML = '';

        // ✅ Add each promise result
        results.forEach(result => {
          const row = `
            <tr>
              <td>Promise ${result.index}</td>
              <td>${result.time.toFixed(3)}</td>
            </tr>
          `;
          output.innerHTML += row;
        });

        // ✅ Add total row
        output.innerHTML += `
          <tr>
            <td>Total</td>
            <td>${totalTime}</td>
          </tr>
        `;
      });
    });