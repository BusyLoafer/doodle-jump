import { BasePlatform } from "./BasePlatform";

export class BluePlatform extends BasePlatform {
  constructor(scene: Phaser.Scene, x: number, y: number, texture = "blue") {
    super(scene, x, y, texture);
    scene.add.existing(this);
    scene.physics.add.existing(this);
    this.setCollideWorldBounds(true)
    this.getBody().setBoundsRectangle(new Phaser.Geom.Rectangle(0, y - 20, 600, 40));
    this.getBody().allowGravity = false;
    this.setBounceX(1)
    this.setVelocityX(Phaser.Math.Between(150, 250));
  }

  public checkCollision(func: Function): void {
    func();
  }

}