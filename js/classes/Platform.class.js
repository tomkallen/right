import game from "../game";
import GameObject from "./Object.class";

export default class Platform extends GameObject {
    constructor(sprite) {
        super(sprite);
        this.game = game;
        this.body.immovable = true
    };

    spawn(x, y) {
        this.reset(x, y);
        this.exists = true;
        this.active = true;
        this.body.velocity.x = -240;
    };

    update() {
        if (this.x < -100) {
            game.log(`destroy out of bounds`);
            this.destroy();
        }
    }

}