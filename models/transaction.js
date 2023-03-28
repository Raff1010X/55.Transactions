exports.report = (data) => {
    data = [
        {
            debitAccount: '32309111922661937852684864',
            creditAccount: '06105023389842834748547303',
            amount: 10.9,
        },
        {
            debitAccount: '31074318698137062235845814',
            creditAccount: '66105036543749403346524547',
            amount: 200.9,
        },
        {
            debitAccount: '66105036543749403346524547',
            creditAccount: '32309111922661937852684864',
            amount: 50.1,
        },
    ];

    let accounts = prepareInitialAccounts(data);
    let response = calculateAccounts(data, accounts)

    return { response };
};

function prepareInitialAccounts(data) {
    let accounts = []

    data.forEach((el) => {
        accounts.push(el.debitAccount);
        accounts.push(el.creditAccount);
    });

    accounts = Array.from(new Set(accounts))
        .sort()
        .map((el) => {
            return { account: el, debitCount: 0, creditCount: 0, balance: 0 };
        });

    return accounts;
}

function calculateAccounts(data, accounts) {

    data.forEach((el) => {
        console.log(el)
    });

    return accounts;
}
