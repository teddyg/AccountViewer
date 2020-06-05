import { Account } from '../models/account.model';

export const sortByCashAvailableAscending = (accounts: Account[]): Account[] => {
    // ascending order by cash available
    accounts.sort((a, b) => {
        if (a.CashAvailable < b.CashAvailable) {
            return -1;
        }
        if (a.CashAvailable > b.CashAvailable) {
            return 1;
        }
        return 0;
    });

    return accounts;
};

export const sortByCashAvailableDescending = (accounts: Account[]): Account[] => {
    // descending order by cash available
    accounts.sort((a, b) => {
        if (a.CashAvailable > b.CashAvailable) {
            return -1;
        }
        if (a.CashAvailable < b.CashAvailable) {
            return 1;
        }
        return 0;
    });

    return accounts;
};

export const sortByAccountNumberDescending = (accounts: Account[]): Account[] => {
    // descending order by account number
    accounts.sort((a, b) => {
        if (a.Number > b.Number) {
            return -1;
        }
        if (a.Number < b.Number) {
            return 1;
        }
        return 0;
    });

    return accounts;
};

export const sortByAccountNumberAscending = (accounts: Account[]): Account[] => {
    // ascending order by account number
    accounts.sort((a, b) => {
        if (a.Number < b.Number) {
            return -1;
        }
        if (a.Number > b.Number) {
            return 1;
        }
        return 0;
    });

    return accounts;
};


