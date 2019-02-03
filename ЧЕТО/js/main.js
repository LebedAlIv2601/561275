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

this.a = [{x: 200, y: 200, direction: 'right'},{x: 149, y: 200, direction: 'right'}];
this.a.forEach((element, i) => {
	this.blocks[i] = this.add.sprite(element.x, element.y, 'kvadrat');
	this.game.physics.arcade.enable(this.blocks[i])
	this.blocks[i].property = element.direction
})

this.delay = 1000;
}, 
update: function() { 
	this.blocks.forEach((element) => {
	if(this.cursors.up.isDown) {
		element.property = "up"
	}
		if(this.cursors.down.isDown) {
		element.property = "down"
	}
		if(this.cursors.left.isDown) {
		element.property = "left"
	}
		if(this.cursors.right.isDown) {
		element.property = "right"
	}
})
if(game.time.now > this.delay) {
this.blocks.forEach((element) => {

	if(element.property === "right") {
		element.body.position.x += this.RUNNING_SPEED
		element.body.position.y += 0
	} else if(element.property === "left"){
		element.body.position.x += -this.RUNNING_SPEED
		element.body.position.y += 0
	} else if(element.property === "up"){
		element.body.position.x += 0
		element.body.position.y += -this.RUNNING_SPEED
	} else if(element.property === "down"){
		element.body.position.x += 0
		element.body.position.y += this.RUNNING_SPEED
	} 

	// 	if(this.cursors.down.isDown) {

	// 	element.body.position.x += 0
	// 	element.body.position.y += this.RUNNING_SPEED
	// }
	// 	if(this.cursors.right.isDown) {

	// 	element.body.position.x += this.RUNNING_SPEED
	// 	element.body.position.y += 0
	// }
	// 	if(this.cursors.left.isDown) {

	// 	element.body.position.x += -this.RUNNING_SPEED
	// 	element.body.position.y += 0
	// }
	// element.body.position.x += this.RUNNING_SPEED;

})

	
	this.delay += 1000;
}
}, 

}; 

//initiate the Phaser framework 
var game = new Phaser.Game(480, 480, Phaser.AUTO); 

game.state.add('GameState', GameState); 
game.state.start('GameState');
