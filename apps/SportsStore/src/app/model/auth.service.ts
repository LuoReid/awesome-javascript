import { Observable } from 'rxjs';
import { RestDataSource } from './rest.datasource';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  constructor(private dataSource: RestDataSource) {}

  authenticate(user: string, pass: string): Observable<boolean> {
    return this.dataSource.authenticate(user, pass);
  }
  get authenticated(): boolean {
    return this.dataSource.auth_token != null;
  }
  clear(): void {
    this.dataSource.auth_token = null;
  }
}
