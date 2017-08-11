import game from "../game";


export class Preload {
    preload() {
        /* Enabling dev mode */
        game.devMode = true;
        game.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js');
        game.load.image('player', 'sprites/triangle.png');
        game.load.image('platform', 'sprites/platform.png');
    }

    create() {
        const cursors = game.input.keyboard.createCursorKeys();
        const one = game.input.keyboard.addKey(Phaser.KeyCode.ONE);
        const two = game.input.keyboard.addKey(Phaser.KeyCode.TWO);
        const three = game.input.keyboard.addKey(Phaser.KeyCode.THREE);
        game.Key = {cursors, one, two, three};

        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.physics.arcade.gravity.y = 1000;

        game.walls = [];
        game.state.start("Level");
        game.log = (message) => game.devMode && console.log(message);
    }

}
