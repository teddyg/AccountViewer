import { Component, OnInit } from '@angular/core';
import { Account } from '../../models/account.model';
import { AccountsService } from '../../services';
import { sortByAccountNumberAscending, sortByAccountNumberDescending, sortByCashAvailableAscending, sortByCashAvailableDescending} from '../../utilities';
import { Observable} from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-account-container',
  templateUrl: './account-container.component.html',
  styleUrls: ['./account-container.component.css']
})
export class AccountContainerComponent implements OnInit {
    public accounts$: Observable<Account[]>;

    constructor(private service: AccountsService) {}

    public ngOnInit() {
        this.getAccountsAndSort(true, 0);
    }

    public handleReloadAccounts(params: any) {
        this.getAccountsAndSort(params.SortOrder, params.TabIndex);
    }

    public getAccountsAndSort(ascending: boolean, activeTab: number) {
        // dynamic utility function to handle sorting
        let sort;

        if (activeTab === 0) {
            if (ascending) {
                sort = sortByAccountNumberAscending;
            } else {
                sort = sortByAccountNumberDescending;
            }
        } else {
            if (ascending) {
                sort = sortByCashAvailableAscending;
            } else {
                sort = sortByCashAvailableDescending;
            }
        }

        this.accounts$ = this.service.getAccounts().pipe(map(sort));
    }
}
