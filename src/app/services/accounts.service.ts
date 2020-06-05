import { Injectable } from '@angular/core';
import { Account } from '../models/account.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AccountsService {

    private url = 'api/accounts';

    public constructor(private http: HttpClient) { }

    public getAccounts(): Observable<Account[]> {
        return this.http.get<Account[]>(this.url);
    }

}
