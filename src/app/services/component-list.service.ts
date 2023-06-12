import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Item } from '../models/item.interface';

@Injectable({
  providedIn: 'root',
})
export class ComponentListService {
  constructor(private http: HttpClient) {}

  getAllItems(): Observable<Item[]> {
    return this.http.get<Item[]>('https://randomuser.me/api/?results=50').pipe(
      map((response: any) => {
        const results = response.results;
        return results.map((result: any) => {
          const item: Item = {
            phone: result.phone,
            name: result.name.first,
            picture: result.picture.large,
            nat: result.nat,
          };
          return item;
        });
      })
    );
  }
  getItemsById(phone: string): Observable<Item> {
    const url = `https://randomuser.me/api/?phone=${phone}`;
    return this.http.get<Item>(url).pipe(
      map((response: any) => {
        const result = response.results[0];
        const item: Item = {
          phone: result.phone,
          name: result.name.first,
          picture: result.picture.large,
          nat: result.nat,
        };
        return item;
      })
    );
  }
}
