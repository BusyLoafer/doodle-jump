import { helpType } from "~/scripts/const/platforms";
import { Player } from "../Player";
import { BaseHelper } from "./BaseHelper";

export class RocketHelper extends BaseHelper {
  private activated: boolean = false;
  constructor(scene: Phaser.Scene, x: number, y: number, target: Player, texture = helpType.rocket) {
    super(scene, x, y, texture, target);
    scene.add.existing(this);
    scene.physics.add.existing(this);
    this.setOrigin(0.5, 1);
    this.getBody().allowGravity = false;
  }

  public checkCollision(): void {
    if (!this.activated) {
      this.target.rocketHelp()
      this.activated = true
      this.destroy();
    }
  }

}