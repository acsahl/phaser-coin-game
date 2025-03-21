class mainScene {
    preload() {
        this.load.image('player', 'assets/player.png');
        this.load.image('coin', 'assets/coin.png');
    }

    create() {
        this.player = this.physics.add.sprite(100,100, 'player');
        this.coin = this.physics.add.sprite(50, 50, 'coin');
        this.arrow = this.input.keyboard.createCursorKeys();

        this.score = 0;
        let style = {fonr:'20px Arial', fill:'#fff'};
        this.scoreText = this.add.text(20, 20, 'Score: ' + this.score, style);
    }

    update() {
        if (this.arrow.right.isDown) {
            this.player.x += 3;
          } else if (this.arrow.left.isDown) {
            this.player.x -= 3;
          }
      
        if (this.arrow.down.isDown) {
            this.player.y += 3;
         } else if (this.arrow.up.isDown) {
            this.player.y -= 3;
        }
          
        if (this.physics.overlap(this.player, this.coin)) {
            this.hit();
          }
    }

 hit() {
            this.coin.x = Phaser.Math.Between(0, this.sys.game.config.width);
            this.coin.y = Phaser.Math.Between(0, this.sys.game.config.height);

            this.score += 10;
            this.scoreText.setText('score: ' + this.score);

            this.tweens.add({
                targets: this.player,
                duration: 200,
                scaleX: 1.2,
                scaleY: 1.2,
                yoyo: true,
              });
        }
        
        
    }
    new Phaser.Game({
        width: 700,
        height: 400,
        backgroundColor: '#3498db',
        scene: mainScene,
        physics: { default: 'arcade' },
        parent: 'game',
      });