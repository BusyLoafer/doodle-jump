import Phaser from 'phaser'
import GameScene from './scripts/scenes/GameScene'

import MenuScene from './scripts/scenes/MenuScene'
import StartScene from './scripts/scenes/StartScene'

const config: Phaser.Types.Core.GameConfig = {
	type: Phaser.AUTO,
	parent: 'jumper',
	width: 600,
	height: 800,
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 1000 },
			// debug: true,
		}
	},
	scene: [StartScene, MenuScene, GameScene]
}

export default new Phaser.Game(config)
