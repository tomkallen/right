import Phaser from "phaser-ce";
import game from "../game";

export default class Player extends Phaser.Sprite {
    constructor(sprite) {
        super(game, 0, 0, sprite);
        this.game = game;
        this.exists = false;
        this.anchor.setTo(0.5, 0.5);
        this.game.physics.arcade.enable(this)
        this.body.allowGravity = true;
        this.body.immovable = false;
        this.jumpVelocity = -650;
        this.body.bounce.set(0.25);
    };

    create(x, y) {
        this.x = x;
        this.y = y;
        this.alive = true;
        this.exists = true;
        this.game.add.existing(this);
        game.log(`player ${this.name} created`);
    };

    update() {
    };

    jump(direction) {
        if (this.body.touching.down) this.body.velocity.y = this.jumpVelocity;
    };
}
