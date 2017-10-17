import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { environment } from '../../environments/environment';

@Injectable()
export class SubjectService {
    constructor(private http: Http) { }

    getAllSubjects() {
        return this.http.get(environment.apiUrl + 'api/Subjects')
            .map((res: Response) => {
                localStorage.setItem('allSubjects', JSON.stringify(res.json()));
                return res.json();
            });
    }
    
    getSubjectsWithNotes() {
        return this.http.get(environment.apiUrl + 'api/Subjects/withnotes')
            .map((res: Response) => { return res.json() });
    }

    getSubject(subjectId: string) {
        return this.http.get(environment.apiUrl + 'api/Subjects/' + subjectId)
            .map(res => { return res.json() });
    }
}