import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { environment } from '../../environments/environment';
import { User, Subject, UserService } from '../_services/user.service';

@Injectable()
export class DocumentService {
    constructor(private http: Http, private userService: UserService) { }

    getAllDocuments() {
        return this.http.get(environment.apiUrl + 'api/Documents', this.userService.jwt())
            .map((res: Response) => {
                localStorage.setItem('allDocuments', JSON.stringify(res.json()));
                return res.json();
            });
    }

    upload(model: UploadModel) {
        const formData = new FormData();
        formData.append("file", model.file);
        formData.append("documentName", model.documentName);
        formData.append("subjectId", model.subjectId.toString());
        formData.append("documentType", model.documentType);
        let headers = this.userService.jwt();
        headers.headers.delete('Content-Type');
        return this.http.post(environment.apiUrl + 'api/Documents', formData, headers)
            .map((res: Response) => {
                return res.json();
            });
    }

    deleteDocument(id) {
        return this.http.delete(environment.apiUrl + 'api/Documents/' + id, this.userService.jwt())
            .map(res => { return res.json });
    }

    searchDocuments(query: string) {
        return this.http.get(environment.apiUrl + 'api/Documents/search?query=' + query, this.userService.jwt())
            .map(res => { return res.json() });
    }

    searchBySubject(query: string, subject: string) {
        return this.http.get(environment.apiUrl + 'api/Documents/searchsubject?query=' + query + '&subject=' + subject, this.userService.jwt())
        .map(res => { return res.json() });
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

export class UploadModel {
    file: File;
    documentName: string;
    subjectId: number;
    documentType: string;
}