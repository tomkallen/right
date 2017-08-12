import "pixi";
import "p2";
import Phaser from "phaser-ce";
import {Level, Preload} from "./stages";

const game = new Phaser.Game(1216, 760, Phaser.AUTO, document.getElementById("game"));

game.state.add("Preload", Preload);
game.state.add("Level", Level);
game.state.start("Preload");
if (!Array.prototype.last) {
    Array.prototype.last = function () {
        return this[this.length - 1];
    };
}
export default game;