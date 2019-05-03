import { Injectable } from '@angular/core';
@Injectable()
export class AppState {
    items: Array<number>;
    getItems() {
        return this.items;
    }
}

