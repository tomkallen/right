import game from "../game";
import GameObject from "./Object.class";

export default class Platform extends GameObject{
    constructor(sprite) {
        super(game, 0, 0, sprite);
        this.game = game;
    };

    spawn(x, y) {
        this.reset(x, y);
        this.exists = true;
        this.active = true;
    };

}