const fs = require('fs')

let data = [];
let obj = {
  debitAccount: '32309111922661937852684864',
  creditAccount: '06105023389842834748547303',
  amount: 1.01,
};

for (let i =0; i < 100000; i++) {
  data.push(obj);
}

fs.writeFile(process.cwd() + '/example/test.json', JSON.stringify(data), err => {
  if (err) {
    console.error(err);
  }
});