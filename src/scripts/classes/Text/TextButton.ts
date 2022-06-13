import { GameObjects, Scene } from 'phaser';
import { buttonSize } from '../../const/const';
export class TextButton extends GameObjects.Text {
  constructor(scene: Scene, x: number, y: number, text: string) {
    super(scene, x, y, text, {
      fontSize: '40px',
      // color: '#FF4959',
      color: '#000000',
      stroke: '#000000',
      strokeThickness: 1,
      fixedWidth: buttonSize.w,
      fixedHeight: buttonSize.h,
      align: "center"
    });
    this.setOrigin(0.5, 0.5);
    scene.add.existing(this);
  }
}