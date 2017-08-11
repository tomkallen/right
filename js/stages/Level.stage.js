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
    }

    update() {
        this.game.physics.arcade.collide(this.player, this.platforms);
        if (game.Key.cursors.up.isDown) this.player.jump();
    }

    reset() {
        game.state.start("Level");
    }
}
