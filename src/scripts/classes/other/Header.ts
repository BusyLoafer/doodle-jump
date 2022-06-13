import { Scene } from 'phaser';

export class Header extends Phaser.GameObjects.Sprite {

  constructor(scene: Scene, x: number, y: number, texture: string = "header") {
    super(scene, x, y, texture)

    this.setOrigin(0, 0)
    
    // Добавление экземпляра текущего класса
    scene.add.existing(this);
  }
}