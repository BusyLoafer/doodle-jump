import Phaser from 'phaser'
import { EV_NAME } from '../const/events'
import { helpType, platType } from '../const/platforms'

export default class StartScene extends Phaser.Scene {
  constructor() {
    super('Start')
  }

  preload() {
    this.load.image('background', '/assets/images/background.png')
    this.load.image('header', '/assets/images/header.png')
    
    // player
    this.load.image('jumper', '/assets/images/jumper.png')
    this.load.atlas('s-jumper', 
    '/assets/spriteSheets/player/jumper-sheet.png', 
    '/assets/spriteSheets/player/jumper-salto.json');
    this.load.atlas('r-jumper', 
    '/assets/spriteSheets/player/rocket-sheet.png', 
    '/assets/spriteSheets/player/jumper-rocket.json');


    // platforms
    this.load.image(platType.blue, '/assets/images/blue.png')
    this.load.image(platType.brown, '/assets/images/brown.png')
    this.load.image(platType.green, '/assets/images/green.png')
    this.load.image(platType.orange, '/assets/images/orange.png')
    this.load.image(platType.white, '/assets/images/white.png')

    // platforms atlases
    this.load.atlas('a-brown', '/assets/spriteSheets/brown-sheet.png', '/assets/spriteSheets/brown-sheet.json');
    this.load.atlas('a-orange', '/assets/spriteSheets/orange-sheet.png', '/assets/spriteSheets/orange-sheet.json');
    // this.load.spritesheet('a-brown', '/assets/spriteSheets/brown-sheet.png', { frameWidth: 104, frameHeight: 48 });

    // helpers and atlases
    this.load.image(helpType.spring, '/assets/images/helpers/spring.png')
    this.load.atlas('a-spring', 
    '/assets/spriteSheets/helpers/spring-sheet.png', 
    '/assets/spriteSheets/helpers/spring-sheet.json');
    
    this.load.image(helpType.tramp, '/assets/images/helpers/trampoline.png')
    this.load.image(helpType.rocket, '/assets/images/helpers/rocket.png')
  }

  create() {
    this.game.events.on(EV_NAME.start, () => this.playGame());
    this.scene.start('start-menu');
  }

  private playGame(): void {
    this.scene.stop('start-menu');
    this.scene.start('game-scene');
  }
}
