export class mID {
    private _id: number
    
    public active: boolean = true;

    constructor(id: number) {this._id = id;}

    public ID():  number    {return this._id;}
}