import Phaser from "phaser-ce";

export default class Player extends Phaser.Sprite {
    constructor(sprite, name) {
        super(game, 0, 0, sprite);
        this.game = game;

        this.exists = false;
        this.anchor.setTo(0.5, 0.5);
        this.game.physics.enable(this);
        this.body.allowGravity = true;
        this.body.immovable = false;
        this.speed = 100;
        this.level = 1;
        this.experience = 0;
        this.direction = 1;
        this.jumpVelocity = -520
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

    move(direction) {
        switch (direction) {
            case "jump":
                if (this.body.onFloor()) this.body.velocity.y = this.jumpVelocity;
                break;
        }
    };
}