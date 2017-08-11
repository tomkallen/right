import game from "../game";
import {Player} from '../classes';

import Platform from "../classes/Platform.class";
import Pool from "../classes/Pool.class";

export class Level {
    create() {

        game.stage.backgroundColor = "#222";
        this.platformPool = [];
        this.player = new Player("hero");

        this.platforms = new Pool(Platform, {sprites: ["platform"], size: 75});
        this.controller();
    }

    update() {
        this.game.physics.arcade.collide(this.player, this.platformPool);
        if (game.Key.cursors.up.isDown) this.player.jump();
        if (game.Key.cursors.down.isDown)  this.player.create(300, 100);;
        this.player.body.x = 300;
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
        const height = Math.floor(Math.random() * 5 +1) * 32;
        const previousHeight = this.platformPool.length
            ? this.platformPool[this.platformPool.length-1].children[0].body.y
            : 624;
        const upOrDown = previousHeight < 320;
        const newPool = new Pool(Platform, {sprites: ['platform'], size});
        console.log(`creating line of ${size} blocks`);
        for (let i = 0; i < size; i++) {
            newPool.create(this.game.width + 112 + this.platforms.children[0].width * i, previousHeight + height * (upOrDown? 1 : -1) );
        }
        this.platformPool.push(newPool);
        this.platformPool.length > 10 && this.platformPool.shift;
    }
}

