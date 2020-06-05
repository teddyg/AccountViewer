import { Injectable } from '@angular/core';
import { Account } from '../models/account.model';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  public constructor() { }

  public createDb() {
    const accounts: Account[] = [
      { Id: '11', Name: 'AAA', Number: 2789, CashAvailable: 34888, PercentChange: -1.03 },
      { Id: '12', Name: 'ACC', Number: 1017, CashAvailable: 8888, PercentChange: 3.42 },
      { Id: '13', Name: 'BCD', Number: 1009, CashAvailable: 19766, PercentChange: 0.00 },
      { Id: '14', Name: 'ABD', Number: 4455, CashAvailable: 9100, PercentChange: 1.23 },
      { Id: '15', Name: 'CBA', Number: 8876, CashAvailable: 15705, PercentChange: -3.07 },
      { Id: '16', Name: 'VBA', Number: 5543, CashAvailable: 97400, PercentChange: 0.00 },
      { Id: '17', Name: 'GAG', Number: 3456, CashAvailable: 16000, PercentChange: 5.25 }
    ];
    return {accounts};
  }

}
