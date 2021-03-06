import Phaser from "phaser";

import HelloWorldScene from "./scenes/HelloWorldScene";

export default new Phaser.Game({
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 800,
        height: 600
    },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 }
        }
    },
    scene: [HelloWorldScene]
})
