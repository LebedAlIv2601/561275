//this game will have only 1 state 
var GameState = { 
init: function() { 
this.game.physics.startSystem(Phaser.Physics.ARKADE); 
this.cursors = this.game.input.keyboard.createCursorKeys(); 
}, 

preload: function() { 
this.load.image('kvadrat', 'img/kvadrat.png');
this.RUNNING_SPEED = 20;
},  
create: function() { 
game.stage.backgroundColor = "#ffffff";

this.blocks = []

this.a = [{x: 200, y: 200},{x: 149, y: 200}];
this.a.forEach((element, i) => {
	this.blocks[i] = this.add.sprite(element.x, element.y, 'kvadrat');
	this.game.physics.arcade.enable(this.blocks[i])
})



// this.player = this.add.sprite(200, 200, 'kvadrat');
// this.player1 = this.add.sprite(149, 200, 'kvadrat');
// this.game.physics.arcade.enable(this.player) 
// this.game.physics.arcade.enable(this.player1)

this.key = 0;
this.delay = 2000;
}, 
update: function() { 

// if(this.cursors.up.isDown) {
// 	if(this.key = 0) {
// 		this.player.body.velocity.x = 0
// 		this.player1.body.velocity.x = 0
// 		this.player.body.velocity.y = -this.RUNNING_SPEED
// 		this.player1.body.velocity.y = -this.RUNNING_SPEED
// 	}
// 	this.key = 1;
// }
// if(this.cursors.up.isUp) {
// 	this.key = 0;
// }

if(game.time.now > this.delay) {
// 	this.player.body.velocity.y = 0
// this.player1.body.velocity.y = 0
// this.player.body.velocity.x = this.RUNNING_SPEED
// this.player1.body.velocity.x = this.RUNNING_SPEED
this.blocks.forEach((element) => {

	// debugger
	element.body.position.x += this.RUNNING_SPEED;
})
	console.log('azazaz')
	this.delay += 2000;
}
}, 

}; 

//initiate the Phaser framework 
var game = new Phaser.Game(480, 480, Phaser.AUTO); 

game.state.add('GameState', GameState); 
game.state.start('GameState');
