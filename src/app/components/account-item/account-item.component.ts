import { Component, Input } from '@angular/core';
import { Account } from '../../models/account.model';

@Component({
  selector: 'app-account-item',
  templateUrl: './account-item.component.html',
  styleUrls: ['./account-item.component.css']
})
export class AccountItemComponent {
    @Input()
    public set account(account: Account) {
        this.item = account;
        this.cashPercentChangeFormat = this.USDFormatter.format(account.CashAvailable * (account.PercentChange / 100));
        this.cashCurrencyFormat = this.USDFormatter.format(account.CashAvailable);
        let tempPercent = account.PercentChange.toString().concat('%');
        if (account.PercentChange > 0) {
            tempPercent = '+' + tempPercent;
        }
        this.percentChangeFormat = tempPercent;
    }

    public get account(): Account {
        return this.item;
    }

    public cashCurrencyFormat: string;
    public cashPercentChangeFormat: string;
    public percentChangeFormat: string;
    private item: Account;

    constructor() {}

    public USDFormatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

}

