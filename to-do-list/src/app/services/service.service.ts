import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

    url = "http://localhost:3000/atividades";

    constructor(private http: HttpClient) { }

    getAll(): Observable<Array<{id: number, atividade: string}>> {
        return this.http.get<Array<{id: number, atividade: string}>>(this.url);
    }

    post(atividade: string): Observable<string> {
        return this.http.post<string>(this.url, {atividade});
    }
}
