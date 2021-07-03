//////////////////////////////////
//
//    Corsac Game Engine (2021)
//
//////////////////////////////////

import Component from './Component';
import Container from './Container';
import {mID} from './Utils'

////////////////////////////////////////////
// Entity (Сущность) - Абстрактный контейнер, хранящий описание некого объекта ввиде
// свойст и логики хранящихся в коллекции Components(Компонентов)/
// Сущность обладает уникальным id, может быть родительным элементов для других сущностей
// и быть дочерним элементом другой сущности
export default class Entity extends mID {
    // Сущность родитель
    private _parent : Entity = null;
    // Коллекция дочерних сущностей
    private _children: Container   = new Container;
    // Коллекция компонентов описывающие сущность
    private _components: Container = new Container;

    // addComponent(Component, args) - добавить сущности указанный компонент
    public addComponent<T extends Component>(type: new(...args: any[]) => T, ...args: any[]): T {
        return this._components.add(type, args);
    }

    // getComponent(Component) - получить указанный компонент
    public getComponent<T extends Component>(type: new() => T) {
        //return this._components.search(type);
    }

    // setParent - Установить родительскую сущность
    setParent(e: Entity): void {this._parent = e;}
    // getParent - Получить родительскую сущность
    getParent(): Entity {return this._parent;}

    // setChildren - Установить дочернию сущность
    setChildren(e: Entity): void {e.setParent(this);this._children.push(e);}
    // setChildren - Получить дочернии сущности
    getChildren() : Container {return this._children;}
}