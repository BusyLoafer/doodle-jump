import { GameObjects, Physics } from "phaser";
import { Player } from "../Player";

export abstract class BaseHelper extends Physics.Arcade.Sprite {
  protected target!: Player;
  constructor(scene: Phaser.Scene, x: number, y: number, texture: string, target: Player, frame?: string | number) {
    super(scene, x, y, texture, frame);
    scene.add.existing(this);
    scene.physics.add.existing(this);
    this.setImmovable(true);
    this.target = target;
  }

  preUpdate(time: number, delta: number): void {
    super.preUpdate(time, delta)
    if (this.y - this.scene.cameras.main.worldView.y > 820) {
      this.destroy()
    }
  }

  abstract checkCollision() : void;
  
  protected getBody(): Physics.Arcade.Body {
    return this.body as Physics.Arcade.Body;
  }
}