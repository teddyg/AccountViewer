import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-account-tabs',
  templateUrl: './account-tabs.component.html',
  styleUrls: ['./account-tabs.component.css']
})
export class AccountTabsComponent {
    @Input() public accounts: Account[];
    @Output() public reloadAccounts = new EventEmitter<any>();

    public accountNumberAscending = true;
    public cashAvailableAscending = true;
    public tabIndex = 0;

    constructor() {}

    public toggleTab(num: number) {
        this.tabIndex = num;

        if (this.tabIndex === 0) {
            this.cashAvailableAscending = true;
        } else {
            this.accountNumberAscending = true;
        }

        const sortOrder = this.getCorrectSortOrder();
        this.reloadAccounts.emit({ SortOrder: sortOrder, TabIndex: this.tabIndex });
    }

    public loadAccountNumberOrderClick() {
        this.accountNumberAscending = !this.accountNumberAscending;
        this.tabIndex = 0;
        this.reloadAccounts.emit({ SortOrder: this.accountNumberAscending, TabIndex: this.tabIndex });
    }

    public loadCashAvailableOrderClick() {
        this.cashAvailableAscending = !this.cashAvailableAscending;
        this.tabIndex = 1;
        this.reloadAccounts.emit({ SortOrder: this.cashAvailableAscending, TabIndex: this.tabIndex });
    }

    private getCorrectSortOrder() {
        let sortOrder;

        if (this.tabIndex === 0) {
            sortOrder = this.accountNumberAscending;
        } else {
            sortOrder = this.cashAvailableAscending;
        }

        return sortOrder;
    }
}
