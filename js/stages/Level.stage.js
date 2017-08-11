import game from "../game";
import {Player} from '../classes';

import Platform from "../classes/Platform.class";
import Pool from "../classes/Pool.class";

export class Level {
    create() {
        this.platformPool = [];
        this.player = new Player("player");
        this.player.create(300, 100);
        this.platforms = new Pool(Platform, {sprites: ["platform"], size: 75});
        this.controller();
    }

    update() {
        this.game.physics.arcade.collide(this.player, this.platformPool);
        if (game.Key.cursors.up.isDown) this.player.jump();
        this.player.body.x = 100;
        if (this.platformPool.length) {
            const lastPool = this.platformPool[this.platformPool.length - 1];
            if (lastPool.children[lastPool.children.length - 1].body.x <= this.game.width) {
                this.controller()
            }
        }
    }

    reset() {
        game.state.start("Level");
    }

    controller() {
        const size = Math.floor(Math.random() * 17 + 5);
        const h = Math.floor(Math.random() * 10 + 6);
        const newPool = new Pool(Platform, {sprites: ['platform'], size});
        console.log(`creating line of ${size} blocks`);
        for (let i = 0; i < size; i++) {
            newPool.create(this.game.width + 48 + this.platforms.children[0].width * i, h * 32);
        }
        this.platformPool.push(newPool);
        this.platformPool.length > 10 && this.platformPool.shift;
    }
}

