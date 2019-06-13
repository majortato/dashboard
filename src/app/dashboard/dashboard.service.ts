import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { Dashboard } from './dashboard.model';

@Injectable({
    providedIn: 'root',
})
export class DashboardService {
    messagesAPI = ''; 
    
    constructor() {}

    getBoard(): Observable<Dashboard> {
        let board = {
            id: 1,
            name: 'testboard',
            widgets: [
                {
                    id: 1,
                    type: 'test',
                    positionX: 1,
                    positionY: 1
                },
                {
                    id: 2,
                    type: 'test',
                    positionX: 2,
                    positionY: 1
                },
            ]
        }
        return of(board);
    } 
}