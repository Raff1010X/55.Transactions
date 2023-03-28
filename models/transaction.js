exports.report = (data) => {
    let map = [];
    data.forEach((el) => map.push(el.debitAccount, el.creditAccount));
    map = Array.from(new Set(map)).sort();

    let accounts = map.map((el) => {
        return { account: el, debitCount: 0, creditCount: 0, balance: 0 };
    });

    data.forEach((el) => {
        const debitIndex = map.indexOf(el.debitAccount);
        const creditIndex = map.indexOf(el.creditAccount);
        accounts[debitIndex].debitCount += 1;
        accounts[creditIndex].creditCount += 1;
        accounts[debitIndex].balance -= el.amount;
        accounts[creditIndex].balance += el.amount;
    });

    return accounts;
}
