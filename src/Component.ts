//////////////////////////////////
//
//    Corsac Game Engine (2021)
//
//////////////////////////////////

import Entity from './Entity';
import {mID} from './Utils'

export default class Component extends mID {
    private _entity: Entity;
    constructor(id: number, ...args: any[]) {
        super(id);
        this.Init(args);
    }
    public Init(...args: any) {}
    get Entity(): Entity {
        return this._entity;
    }
    set Entity(entity: Entity) {
        this._entity = entity;
    }
}