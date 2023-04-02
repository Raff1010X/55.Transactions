# Transakcje
W pewnym dużym banku, każdego dnia, przeprowadzanych są tysiące transakcji na rachunkach. 
Są to zarówno przelewy przychodzące (wpływy) jak i wychodzące (wydatki).

Jeden z działów banku chciałby wiedzieć, jak zmienia się saldo na wszystkich rachunkach po przetworzeniu transakcji z całego dnia. 
Dodatkowo ma wymaganie, aby lista rachunków była posortowana rosnąco.

Przewiduje się, że w niedalekiej przyszłości, takich transakcji może być nawet 100 000, ponieważ stale powiększa się jego baza klientów. 
Nasz system musi być na to gotowy!

## Zadanie:
Napisz algorytm, który przetworzy wszystkie transakcji i zwróci posortowaną listę rachunków, wraz z ilością uznań i obciążeń oraz saldo końcowe.
Zakłada się, że saldo początkowe każdego rachunku to 0zł.

## Przykładowy request/response:
W folderze: './example'

## Algorytm
W pliku: './models/transaction.js'

```javascript
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
```