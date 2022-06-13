import { BasePlatform } from "./BasePlatform";

export class GreenPlatform extends BasePlatform {
  constructor(scene: Phaser.Scene, x: number, y: number, texture = "green") {
    super(scene, x, y, texture);
    scene.add.existing(this);
    scene.physics.add.existing(this);
    this.getBody().allowGravity = false;
  }

  public checkCollision(func: Function): void {
    func();
  }

}