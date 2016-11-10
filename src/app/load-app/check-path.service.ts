import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { CheckPathModel } from '../../shared/model/check-path.model';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class CheckPathService {
    constructor(private http: Http) { }

    checkPath(path: string): Observable<CheckPathModel> {
        return this.http.post('/api/check-path', { path })
            .map(this.parse)
            .catch(this.catch);
    }
    parse(res: Response): CheckPathModel {
        return CheckPathModel.parse(res.json());
    }
    catch(err: any, caught: Observable<CheckPathModel>) {
        return Observable.throw(err.json().error || 'Server error');
    }
}
