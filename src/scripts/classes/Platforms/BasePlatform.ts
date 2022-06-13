import { Physics } from "phaser";

export abstract class BasePlatform extends Physics.Arcade.Sprite {
  constructor(scene: Phaser.Scene, x: number, y: number, texture: string, frame?: string | number) {
    super(scene, x, y, texture, frame);
    scene.add.existing(this);
    scene.physics.add.existing(this);
    this.setSize(100, 10)
    this.setOffset(0, 0)
    this.setImmovable(true);
    this.setDepth(0.5);
    this.body.checkCollision.down = false;
    this.body.checkCollision.left = false;
    this.body.checkCollision.right = false;
  }

  preUpdate(time: number, delta: number): void {
    super.preUpdate(time, delta)
    if (this.y - this.scene.cameras.main.worldView.y > 820) {
      this.destroy()
    }
  }

  abstract checkCollision(func: Function) : void;
  
  protected getBody(): Physics.Arcade.Body {
    return this.body as Physics.Arcade.Body;
  }
}