import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { environment } from '../../environments/environment';
import { User, Subject } from '../_services/user.service';

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

    upload(fileToUpload: any){
        let input = new FormData();
        input.append('file', fileToUpload);

        return this.http.post(environment.apiUrl + 'api/uploadFile', input);
    }
}

export class Document {
    id: string;
    uploadDate: Date;
    fileName: string;
    documentType: string;
    documentName: string;
    owner: User;
    subject: Subject;
}