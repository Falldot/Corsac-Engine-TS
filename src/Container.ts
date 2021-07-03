import Entity from "./Entity";
import Component from "./Component";
import {mID} from './Utils';

export default class Container {
    private data: mID[] = [];
    private bitset: Boolean[]  = [];

    public add<T extends Component | Entity>(type: new(...args: any[]) => T, ...args: any[]) {
        let item = new type(this.bitset.push(true), args[0])
        this.data.push(item);
        return item;
    }

    public map(callback: Function) {
        var newArray = [];
            for(let i = 0; i < this.data.length; i++){
                newArray.push(callback(this.data[i]));
            }
        return newArray;
    }

    public push(item: Component | Entity): number {
        return this.data.push(item);
    }

    public sort(): void {
        this.data.sort((a, b) => a.ID > b.ID ? 1 : -1);
    }

    public remove(id: number): void {
        this.data.splice(this.search(id), 1); 
    }

    public removeAll(): void {
        this.data = [];
    }

    public search(id: number): number {
        let first: number = 0, last: number = this.data.length - 1;
        let result: number, middle: number;
        let found: boolean = false;

        while (found === false && first <= last) {
            middle = Math.floor((first + last) / 2);
            if (this.data[middle].ID() === id) {
                found = true;
                result = middle;
            } else if (this.data[middle].ID() > id){
                last = middle - 1;
            } else {
                first = middle + 1;
            }
        }
        return result;
    }
}