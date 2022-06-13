import Phaser from 'phaser';
import { BaseHelper } from '../classes/Helpers/BaseHelper';
import { RocketHelper } from '../classes/Helpers/RocketHelper';
import { SpringHelper } from '../classes/Helpers/SpringHelper';
import { TrampolineHelper } from '../classes/Helpers/TrampolineHelper';
import { Background } from '../classes/other/Background';
import { BasePlatform } from '../classes/Platforms/BasePlatform';
import { BluePlatform } from '../classes/Platforms/BluePlatform';
import { BrownPlatform } from '../classes/Platforms/BrownPlatform';
import { GreenPlatform } from '../classes/Platforms/GreenPlatform';
import { OrangePlatform } from '../classes/Platforms/OrangePlatform';
import { WhitePlatform } from '../classes/Platforms/WhitePlatform';
import { Player } from '../classes/Player';
import { baseSize } from '../const/const';
import { firstTemplate, helpType, PLATFORMS, platType } from '../const/platforms';

enum State {
  down, up, jump
}

export default class GameScene extends Phaser.Scene {

  private backs!: Background[];
  // private platforms = this.physics.add.staticGroup();
  private platforms;

  private player;
  private cursors;

  private center;

  private minPoint!: number;

  private state: State = State.down

  private currentPoint!: number;

  constructor() {
    super('game-scene')
  }

  preload() {

  }

  create() {
    this.initBackground();
    this.currentPoint = 800;
    this.platforms = this.physics.add.staticGroup();
    this.player = new Player(this, 300, 750);
    this.center = this.physics.add.sprite(300, 500, "orange").setAlpha(0);
    this.center.body.allowGravity = false;
    this.initPlatforms();
    this.cameras.main.startFollow(this.center, false, 0, 0.1, 0, 100)

    this.minPoint = 1000;

    this.cursors = this.input.keyboard.createCursorKeys();
    this.player.setVelocityY(-650)
  }

  update() {
    if (this.state === State.jump) {
      this.player.setVelocityY(-650)
      this.state = State.up
    }
    if (this.cursors.left.isDown) {
      this.player.setVelocityX(-200)
      if (!this.player.salto) this.player.flipX = true
    } else if (this.cursors.right.isDown) {
      this.player.setVelocityX(200)
      if (!this.player.salto) this.player.flipX = false
    } else {
      this.player.setVelocityX(0)
    }

    if (this.player.x > 600) {
      this.player.x = 0
    } else if (this.player.x < 0) {
      this.player.x = 600
    }

    if (this.minPoint > this.player.y) {
      this.minPoint = this.player.y
    }

    if (this.player.y < this.center.y) {
      this.center.y = this.player.y
    } else if (this.player.y > this.center.y + 1000) {
      this.time.delayedCall(500, () => { this.scene.restart() }, [], this);
      // this.center.y = this.player.y
      // this.cameras.main.startFollow(this.player, false, 0, 0.1, 0, 300)
    }
    
    if (this.center.y < this.currentPoint) {
      this.currentPoint -= 800
      this.createRndPlatforms();
      this.createBackground();
    }

    if (this.cursors.up.isDown
      && this.player.body.touching.down
    ) {
      this.player.setVelocityY(-500)
    }
  }

  private checkPlatform(
    ob1: Phaser.Types.Physics.Arcade.GameObjectWithBody,
    platform: BasePlatform,
  ): void {
    if (ob1.body.touching.down) {
      platform.checkCollision(() => { this.state = State.jump })
    }
  }

  private checkHelper(
    ob1: Phaser.Types.Physics.Arcade.GameObjectWithBody,
    helper: BaseHelper | null,
  ): void {
    if (ob1.body.touching.down && helper) {
      helper.checkCollision()
    }
  }

  private initBackground(): void {
    this.backs = [];
    for (let i = 0; i < 2; i++) {
      this.backs.push(new Background(this, 0, -baseSize.h * i))
    }
  }

  private createBackground(): void {
    this.backs.push(new Background(this, 0, this.currentPoint - 800))
  }

  private createPlatform ({ pos, type, required = true }): void {
    const x = pos.x;
    const y = this.currentPoint - pos.y;
    let platform: BasePlatform;
    const { green, brown, white, blue, orange } = platType;
    switch (type) {
      case green:
        platform = new GreenPlatform(this, x, y)
        break;
      case brown:
        platform = new BrownPlatform(this, x, y)
        break;
      case white:
        platform = new WhitePlatform(this, x, y)
        break;
      case orange:
        platform = new OrangePlatform(this, x, y, required)
        break;
      case blue:
        platform = new BluePlatform(this, x, y)
        break;
      default:
        platform = new GreenPlatform(this, x, y)
        break;
    }
    this.physics.add.overlap(this.player, platform,
      (player, _obj) => this.checkPlatform(player, platform),
      () => { }
    )
  }

  private createHelper({ pos, helper }): void {
    let helpObj: BaseHelper | null;
    const x = pos.x;
    const y = this.currentPoint - pos.y - 10;
    switch (helper) {
      case helpType.spring:
        helpObj = new SpringHelper(this, x, y, this.player)
        break;
      case helpType.tramp:
        helpObj = new TrampolineHelper(this, x, y, this.player)
        break;
      case helpType.rocket:
        helpObj = new RocketHelper(this, x, y, this.player)
        break;

      default:
        helpObj = null
        break;
    }
    if (helpObj) {
      this.physics.add.overlap(this.player, helpObj,
        (player, _obj) => this.checkHelper(player, helpObj),
        () => { }
      )
    }
  }

  private initPlatforms(): void {
    firstTemplate.forEach(({ pos, type, required = true, helper = null }) => {
      this.createPlatform({ pos, type, required })
      if (helper) {this.createHelper({pos, helper})}
    });
    this.currentPoint = 0
    PLATFORMS[1].forEach(({ pos, type, required = true, helper = null }) => {
      this.createPlatform({ pos, type, required })
      if (helper) {this.createHelper({pos, helper})}
    });
  }

  private createRndPlatforms(): void {
    const index = Phaser.Math.Between(0, PLATFORMS.length - 1)
    PLATFORMS[index].forEach(({ pos, type, required = true, helper = null }) => {
      this.createPlatform({ pos, type, required })
      if (helper) {this.createHelper({pos, helper})}
    });
  }
}
