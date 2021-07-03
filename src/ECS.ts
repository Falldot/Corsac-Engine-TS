import Entity from "./Entity";
import Container from "./Container";

export default class ECS {
    // Глобальное хранилище сущностей
    private entityCollection: Container = new Container;
    
    public createEntity(): Entity {
        return this.entityCollection.add(Entity);
    }
    public removeEntity(id: number): void {
        this.entityCollection.remove(id)
    }
}