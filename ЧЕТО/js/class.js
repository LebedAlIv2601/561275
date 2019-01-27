var a = [{x: 5, y: 10},{x: 5, y: 10}]
a.push({x: 25, y: 12})
//a.pop()
a.forEach((element) => {
	console.log(element.x,element.y)
})