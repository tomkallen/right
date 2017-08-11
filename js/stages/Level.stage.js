import game from "../game";
import {Player} from '../classes';

import Platform from "../classes/Platform.class";
import Pool from "../classes/Pool.class";

export class Level {
    create() {
        this.player = new Player("player");
        this.player.create(200, 100);
        this.platforms = new Pool(Platform, {sprites: ["platform"], size: 75});
        this.platforms.create(200, 600);
        this.controller()


    }

    update() {

        this.game.physics.arcade.collide(this.player, this.platforms);
        if (game.Key.cursors.up.isDown) this.player.jump();
        this.player.body.x = 100;
    }

    reset() {
        game.state.start("Level");
    }

    controller() {
        let line = Math.floor(Math.random() * 200);
        console.log(line);
        for (let i = 0; i < line; i++) {
            this.platforms.create(this.platforms.children[0].width * i, 500);
        }
    }
}

