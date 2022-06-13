import { BasePlatform } from "./BasePlatform";

export class OrangePlatform extends BasePlatform {

  private changed: boolean = false;
  private require!: boolean;

  constructor(scene: Phaser.Scene, x: number, y: number, require: boolean, texture = "orange") {
    super(scene, x, y, texture);
    this.require = require;
    scene.add.existing(this);
    scene.physics.add.existing(this);
    this.getBody().allowGravity = false;
    this.initAnimations()
  }

  public checkCollision(func: Function): void {
    if (this.require) func();
  }

  preUpdate(time: number, delta: number): void {
    super.preUpdate(time, delta)
    if (!this.changed && !this.require && this.scene) {
      if (this.y - this.scene.cameras.main.worldView.y > 400) {
        this.anims.play('orange-change', true);
        this.scene.tweens.add({
          targets: this,
          alpha: 0,
          duration: 100,
          delay: 500
        });
        this.scene.time.delayedCall(600, () => { this.destroy() }, [], this);
        this.changed = true
      }
    }
  }

  private initAnimations(): void {
    this.scene.anims.create({
      key: 'orange-change',
      frames: this.scene.anims.generateFrameNames('a-orange', {
        prefix: 'change-',
        end: 4,
      }),
      frameRate: 8,
    });
  }

}