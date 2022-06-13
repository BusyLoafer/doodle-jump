import { Physics } from "phaser";

export class Player extends Physics.Arcade.Sprite {
  private flying: boolean = false;
  private salto: boolean = false;
  constructor(scene: Phaser.Scene, x: number, y: number, texture = "jumper", frame?: string | number) {
    super(scene, x, y, texture, frame);
    scene.add.existing(this);
    scene.physics.add.existing(this);
    this.setSize(60, 10)
    this.setOffset(25, 80)
    this.setMass(1)
    this.setPushable(false);
    this.setDepth(1);
    this.setImmovable(true);
    this.initAnimations()

    // this.on('spring-help', () => {this.setVelocityY(-2000)});
  }

  preUpdate(time: number, delta: number): void {
    super.preUpdate(time, delta)
    if (this.flying) {
      this.setVelocityY(-1000);
    }
  }

  public springHelp(): void {
    this.setVelocityY(-1200)
  }

  public trampolineHelp(): void {
    this.setVelocityY(-1000)
    this.anims.play('jump-salto', true);
    this.salto = true;
    this.scene.time.delayedCall(500, () => { 
      this.salto = false;
     }, [], this);
  }

  public rocketHelp(): void {
    // this.setVelocityY(-1000)
    this.anims.play('jump-rocket', false)
    this.flying = true;
    this.scene.time.delayedCall(2000, () => { 
      this.flying = false;
      this.anims.complete();
     }, [], this);
  }

  private initAnimations(): void {
    this.scene.anims.create({
      key: 'jump-salto',
      frames: this.scene.anims.generateFrameNames('s-jumper', {
        prefix: 'salto-',
        end: 15,
      }),
      frameRate: 32,
    });

    this.scene.anims.create({
      key: 'jump-rocket',
      frames: this.scene.anims.generateFrameNames('r-jumper', {
        prefix: 'rocket-',
        end: 1,
      }),
      repeat: 16,
      frameRate: 16,
    });
  }
  
  // protected getBody(): Physics.Arcade.Body {
  //   return this.body as Physics.Arcade.Body;
  // }
}