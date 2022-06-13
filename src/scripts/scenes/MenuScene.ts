import Phaser from 'phaser'
import { TextButton } from '../classes/Text/TextButton';
import { baseSize } from '../const/const'
import { EV_NAME } from '../const/events';

export default class MenuScene extends Phaser.Scene {

  private container!: Phaser.GameObjects.Container;
  constructor() {
    super('start-menu')
  }

  preload() {

  }

  create() {
    const image = this.add.image(0, 0, "background")
    this.container = this.add.container(baseSize.w * 0.5, baseSize.h * 0.5)
    const btnNewGame = new TextButton(this, 0, 0, 'New Game')
      .setInteractive({ useHandCursor: true })
      .on('pointerup', () => {
        this.game.events.emit(EV_NAME.start);
      });
    this.container.add(image);
    this.container.add(btnNewGame);
  }
}
