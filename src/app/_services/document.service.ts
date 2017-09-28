import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { environment } from '../../environments/environment';

@Injectable()
export class DocumentService {
    constructor(private http: Http) { }

    getAllDocuments() {
        return this.http.get(environment.apiUrl + 'api/Documents')
        .map((res: Response) => {
            localStorage.setItem('allDocuments', JSON.stringify(res.json()));
            return res.json();
        });
    }
}