import { BasePlatform } from "./BasePlatform";

export class BrownPlatform extends BasePlatform {
  private death: boolean = false
  constructor(scene: Phaser.Scene, x: number, y: number, texture = "brown") {
    super(scene, x, y, texture);
    scene.add.existing(this);
    scene.physics.add.existing(this);
    this.initAnimations()
    this.getBody().allowGravity = false;
  }


  public checkCollision(func: Function): void {
    if (!this.death) {
    this.anims.play('brown-death', true);
    this.setVelocityY(100);
    this.scene.tweens.add({
      targets: this,
      alpha: 0,
      duration: 500
    });
    this.death = true
    this.scene.time.delayedCall(500, () => { this.destroy()}, [], this);
    }
  }

  private initAnimations(): void {
    this.scene.anims.create({
      key: 'brown-death',
      frames: this.scene.anims.generateFrameNames('a-brown', {
        prefix: 'death-',
        end: 2,
      }),
      frameRate: 9,
    });
  }

}