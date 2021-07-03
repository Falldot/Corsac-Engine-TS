import {ECS, Component} from './index';


class Transform1 extends Component {
    x = 0; y = 0;
    Init(x: number, y: number) {
        this.x = x;
        this.y = y;
        console.log(this)
    }
}

class Transform2 extends Component {
    x = 0; y = 0;
}

class Transform3 extends Component {
    x = 0; y = 0;
}

const main = () => {

    const Vasa = ECS.createEntity();
    const Peta = ECS.createEntity();
    const Sasha = ECS.createEntity();

    Vasa.addComponent(Transform1, 20, 30)
    console.log(Vasa);

};

main();