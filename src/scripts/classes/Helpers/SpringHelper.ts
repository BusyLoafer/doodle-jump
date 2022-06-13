import { Player } from "../Player";
import { BaseHelper } from "./BaseHelper";

export class SpringHelper extends BaseHelper {
  private activated: boolean = false;
  constructor(scene: Phaser.Scene, x: number, y: number, target: Player, texture = "spring") {
    super(scene, x, y, texture, target);
    scene.add.existing(this);
    scene.physics.add.existing(this);
    this.setOrigin(0.5, 1);
    this.setSize(16, 13)
    this.setOffset(0, 16)
    this.getBody().allowGravity = false;
    this.initAnimations()
  }

  public checkCollision(): void {
    if (!this.activated) {
      this.anims.play("spring-activate", true)
      this.target.springHelp()
      this.activated = true
    }
  }

  preUpdate(time: number, delta: number): void {
    super.preUpdate(time, delta)
  }

  private initAnimations(): void {
    this.scene.anims.create({
      key: 'spring-activate',
      frames: this.scene.anims.generateFrameNames('a-spring', {
        prefix: 'spring-',
        end: 1,
      }),
      frameRate: 8,
    });
  }

}