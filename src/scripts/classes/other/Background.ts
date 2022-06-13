import { Scene } from 'phaser';

export class Background extends Phaser.GameObjects.Sprite {

  constructor(scene: Scene, x: number, y: number, texture: string = "background") {
    super(scene, x, y, texture)

    this.setOrigin(0, 0)
    this.setDepth(0);
    
    // Добавление экземпляра текущего класса
    scene.add.existing(this);
  }
}