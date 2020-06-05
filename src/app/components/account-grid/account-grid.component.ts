import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-account-grid',
  templateUrl: './account-grid.component.html',
  styleUrls: ['./account-grid.component.css']
})
export class AccountGridComponent {
    @Input() public accounts: Account[];
    @Output() public reloadAccounts = new EventEmitter<any>();

    public showLoadButton = true;
    public accountsToShow = 3;

    constructor() {}

    public toggleLoadMore() {
        this.showLoadButton = false;
        this.accountsToShow = this.accounts.length;

        this.reloadAccounts.emit({ SortOrder: true, TabIndex: 0 });
    }

    public handleReloadAccounts(params: any) {
        this.reloadAccounts.emit({ SortOrder: params.SortOrder, TabIndex: params.TabIndex });
    }
}
